import { RideType } from "./enum/rideType"
import { generateName } from "./generator"
import { WindowClass } from "./enum/windowClass"
import { mainWindow } from "./ui/mainWindow"
import { getNamingOption } from "./settings"

// GAME_COMMAND_FLAG_GHOST, see Game.h in OpenRCT2.
const GAME_COMMAND_FLAG_GHOST = 1 << 6

// RCT1 competition designs, released without their names: u(0010), u(Z005), and so on.
// The game appends a number when the park already has a ride with that name.
const RCT1_COMPETITION_NAME = /^u\([0-9A-Z]{4}\)( \d+)?$/i

let pendingTrackDesignRide: { rideType: RideType; ride: number } | null = null

const isGhostAction = (args: object) =>
	"flags" in args &&
	((args as { flags: number }).flags & GAME_COMMAND_FLAG_GHOST) !== 0

const hasPremadeTrackDesignWindowOpen = () => {
	for (let index = 0; index < ui.windows; index++) {
		const w = ui.getWindow(index)

		if (
			w.classification == WindowClass.TrackDesignList ||
			w.classification == WindowClass.TrackDesignPlace
		) {
			return true
		}
	}
	return false
}

const MAX_NAME_ATTEMPTS = 100

const getAllExistingRideNames = () => map.rides.map((ride) => ride.name)

const generateUnusedName = (rideType: RideType): string | null => {
	const existingNames = getAllExistingRideNames()

	for (let attempt = 0; attempt < MAX_NAME_ATTEMPTS; attempt++) {
		const name = generateName(rideType)

		if (name !== "" && existingNames.every((n) => n !== name)) {
			return name
		}
	}
	return null
}

const shouldName = (ride: number, fromTrackDesign: boolean) => {
	if (getNamingOption("everything")) {
		return true
	}

	const placed = map.getRide(ride)
	if (!placed) {
		return false
	}

	if (placed.classification !== "ride") {
		return getNamingOption("shopsAndStalls")
	}

	if (fromTrackDesign) {
		return RCT1_COMPETITION_NAME.test(placed.name)
			? getNamingOption("rct1Designs")
			: getNamingOption("savedDesigns")
	}

	return getNamingOption("customDesigns")
}

const setRideName = (rideType: RideType, ride: number) => {
	const foundName = generateUnusedName(rideType)

	if (!foundName) {
		console.log(
			`[NameGenerator] No unique name found for rideId ${ride} ` +
				`(rideType ${rideType}), leaving the default name.`
		)
		return
	}

	context.executeAction(
		"ridesetname",
		{ ride, name: foundName },
		({ error, errorMessage, errorTitle }) => {
			if (error) {
				console.log(`${errorTitle}: ${errorMessage}`)
			} else {
				console.log(`Successfully named rideId ${ride} to ${foundName}`)
			}
		}
	)
}

const openPluginWindow = () => {
	// Check if game is up-to-date...
	const version = context.apiVersion
	if (version < 75) {
		// 75 => https://github.com/OpenRCT2/OpenRCT2/pull/19305
		showUpdateError(
			"The version of OpenRCT2 you are currently playing is too old for this plugin."
		)
		return
	}

	// Show the current instance if one is active.
	mainWindow.open()
}

/**
 * Report to the player that they need to update the game,
 * both ingame and in console.
 */
function showUpdateError(message: string): void {
	const title = "Please update the game! "

	ui.showError(title, message)
	console.log("[NameGenerator] " + title + message)
}

export function main() {
	if (typeof ui !== "undefined") {
		ui.registerMenuItem("NameGenerator", () => openPluginWindow())
	}
	context.subscribe("action.execute", (event) => {
		switch (event.action) {
			case "ridecreate": {
				if (!("rideType" in event.args) || !("ride" in event.result)) {
					break
				}

				if (isGhostAction(event.args)) {
					break
				}

				const rideType = event.args.rideType as RideType
				const ride = event.result.ride as number

				if (hasPremadeTrackDesignWindowOpen()) {
					pendingTrackDesignRide = { rideType, ride }
					break
				}

				if (shouldName(ride, false)) {
					setRideName(rideType, ride)
				}
				break
			}
			case "trackdesign": {
				if (isGhostAction(event.args)) {
					break
				}

				const pending = pendingTrackDesignRide
				pendingTrackDesignRide = null

				if (
					pending &&
					!event.result.error &&
					shouldName(pending.ride, true)
				) {
					setRideName(pending.rideType, pending.ride)
				}
				break
			}
			default:
				break
		}
	})
}
