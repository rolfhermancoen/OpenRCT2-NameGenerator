import { RideType } from "./enum/rideType"
import { generateName } from "./generator"
import { WindowClass } from "./enum/windowClass"
import { mainWindow } from "./ui/mainWindow"

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

const setRideName = (rideType: RideType, ride: number) => {
	if (hasPremadeTrackDesignWindowOpen()) {
		return
	}

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
				if ("rideType" in event.args && "ride" in event.result) {
					setRideName(
						event.args.rideType as RideType,
						event.result.ride as number
					)
				}
				break
			}
			default:
				break
		}
	})
}
