import test from "ava"
import Mock from "openrct2-mocks"
import { main } from "../src/main"
import { RideType } from "../src/enum/rideType"
import { WindowClass } from "../src/enum/windowClass"
import { NamingOption } from "../src/settings"

const GAME_COMMAND_FLAG_GHOST = 1 << 6

const PLACED_RIDE = 7

type ExecutedAction = { action: string; args: object }

type SetupOptions = {
	openWindows?: WindowClass[]
	naming?: NamingOption[]
	placedRideName?: string
	classification?: RideClassification
}

/**
 * These tests share the module state of `main`, so they have to run serially.
 */
function setup({
	openWindows = [],
	naming = ["customDesigns", "rct1Designs", "shopsAndStalls"],
	placedRideName = "u(0010)",
	classification = "ride"
}: SetupOptions = {}) {
	const executed: ExecutedAction[] = []
	let hook: ((event: GameActionEventArgs) => void) | null = null

	globalThis.ui = Mock.ui({
		registerMenuItem: () => undefined,
		windows: openWindows.length,
		getWindow: (index) =>
			Mock.window({ classification: openWindows[index as number] })
	})
	globalThis.map = Mock.map({
		rides: [
			Mock.ride({ id: PLACED_RIDE, name: placedRideName, classification })
		]
	})
	globalThis.context = Mock.context({
		sharedStorage: {
			get: <T>(key: string) =>
				naming.some(
					(option) => key === `NameGenerator.${option}`
				) as unknown as T,
			set: () => undefined,
			has: () => true,
			getAll: () => ({})
		},
		subscribe: (_hook, callback) => {
			hook = callback as (event: GameActionEventArgs) => void
			return { dispose: () => undefined }
		},
		executeAction: (action, args) => {
			executed.push({ action, args })
		}
	})

	main()

	if (!hook) {
		throw new Error("plugin did not subscribe to any hook")
	}

	return { execute: hook as (event: GameActionEventArgs) => void, executed }
}

const rideCreateEvent = (flags = 0): GameActionEventArgs =>
	({
		action: "ridecreate",
		args: { rideType: RideType.MERRY_GO_ROUND, flags },
		result: { error: 0, ride: PLACED_RIDE }
	}) as unknown as GameActionEventArgs

const trackDesignEvent = (flags = 0, error = 0): GameActionEventArgs =>
	({
		action: "trackdesign",
		args: { x: 0, y: 0, z: 0, direction: 0, flags },
		result: { error }
	}) as unknown as GameActionEventArgs

const designPlacement = { openWindows: [WindowClass.TrackDesignPlace] }

test.serial("names a ride built from scratch", (t) => {
	const { execute, executed } = setup({ placedRideName: "Merry-go-round 1" })

	execute(rideCreateEvent())

	t.is(executed.length, 1)
	t.is(executed[0]?.action, "ridesetname")
	t.like(executed[0]?.args, { ride: PLACED_RIDE })
})

test.serial("leaves a self-built ride alone when not asked for", (t) => {
	const { execute, executed } = setup({
		naming: ["rct1Designs", "shopsAndStalls"],
		placedRideName: "Merry-go-round 1"
	})

	execute(rideCreateEvent())

	t.is(executed.length, 0)
})

const stall = {
	classification: "stall" as const,
	placedRideName: "Burger Bar 1"
}

test.serial("names a stall", (t) => {
	const { execute, executed } = setup(stall)

	execute(rideCreateEvent())

	t.is(executed.length, 1)
})

test.serial("leaves a stall alone when not asked for", (t) => {
	const { execute, executed } = setup({
		...stall,
		naming: ["customDesigns", "rct1Designs"]
	})

	execute(rideCreateEvent())

	t.is(executed.length, 0)
})

test.serial("ignores rides created by a placement preview", (t) => {
	const { execute, executed } = setup()

	execute(rideCreateEvent(GAME_COMMAND_FLAG_GHOST))

	t.is(executed.length, 0)
})

test.serial("names an RCT1 design after the design has been placed", (t) => {
	const { execute, executed } = setup(designPlacement)

	execute(rideCreateEvent())
	t.is(executed.length, 0, "the game still has to name it after the design")

	execute(trackDesignEvent())

	t.is(executed.length, 1)
	t.is(executed[0]?.action, "ridesetname")
	t.like(executed[0]?.args, { ride: PLACED_RIDE })
})

test.serial("names an RCT1 design that the game numbered", (t) => {
	const { execute, executed } = setup({
		...designPlacement,
		placedRideName: "u(Z005) 2"
	})

	execute(rideCreateEvent())
	execute(trackDesignEvent())

	t.is(executed.length, 1)
})

test.serial("keeps the name of a design that has a real one", (t) => {
	const { execute, executed } = setup({
		...designPlacement,
		placedRideName: "Corkscrew"
	})

	execute(rideCreateEvent())
	execute(trackDesignEvent())

	t.is(executed.length, 0)
})

test.serial("names a saved design when asked for", (t) => {
	const { execute, executed } = setup({
		...designPlacement,
		naming: ["savedDesigns"],
		placedRideName: "Corkscrew"
	})

	execute(rideCreateEvent())
	execute(trackDesignEvent())

	t.is(executed.length, 1)
})

test.serial(
	"leaves an RCT1 design alone when only saved designs are on",
	(t) => {
		const { execute, executed } = setup({
			...designPlacement,
			naming: ["savedDesigns"]
		})

		execute(rideCreateEvent())
		execute(trackDesignEvent())

		t.is(executed.length, 0)
	}
)

test.serial("names every design when asked to", (t) => {
	const { execute, executed } = setup({
		...designPlacement,
		naming: ["everything"],
		placedRideName: "Corkscrew"
	})

	execute(rideCreateEvent())
	execute(trackDesignEvent())

	t.is(executed.length, 1)
})

test.serial("leaves every design alone when nothing is selected", (t) => {
	const { execute, executed } = setup({ ...designPlacement, naming: [] })

	execute(rideCreateEvent())
	execute(trackDesignEvent())

	t.is(executed.length, 0)
})

test.serial("does not name a pre-built ride when the placement failed", (t) => {
	const { execute, executed } = setup({
		openWindows: [WindowClass.TrackDesignList]
	})

	execute(rideCreateEvent())
	execute(trackDesignEvent(0, 1))

	t.is(executed.length, 0)
})

test.serial("does not name the preview ride of a design placement", (t) => {
	const { execute, executed } = setup(designPlacement)

	execute(rideCreateEvent(GAME_COMMAND_FLAG_GHOST))
	execute(trackDesignEvent(GAME_COMMAND_FLAG_GHOST))

	t.is(executed.length, 0)
})
