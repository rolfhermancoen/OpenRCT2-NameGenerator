import test from "ava"
import Mock from "openrct2-mocks"
import { main } from "../src/main"
import { RideType } from "../src/enum/rideType"
import { WindowClass } from "../src/enum/windowClass"

const GAME_COMMAND_FLAG_GHOST = 1 << 6

type ExecutedAction = { action: string; args: object }

/**
 * These tests share the module state of `main`, so they have to run serially.
 */
function setup(openWindows: WindowClass[] = []) {
	const executed: ExecutedAction[] = []
	let hook: ((event: GameActionEventArgs) => void) | null = null

	globalThis.ui = Mock.ui({
		registerMenuItem: () => undefined,
		windows: openWindows.length,
		getWindow: (index) =>
			Mock.window({ classification: openWindows[index as number] })
	})
	globalThis.map = Mock.map({ rides: [] })
	globalThis.context = Mock.context({
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
		result: { error: 0, ride: 7 }
	}) as unknown as GameActionEventArgs

const trackDesignEvent = (flags = 0, error = 0): GameActionEventArgs =>
	({
		action: "trackdesign",
		args: { x: 0, y: 0, z: 0, direction: 0, flags },
		result: { error }
	}) as unknown as GameActionEventArgs

test.serial("names a ride built from scratch", (t) => {
	const { execute, executed } = setup()

	execute(rideCreateEvent())

	t.is(executed.length, 1)
	t.is(executed[0]?.action, "ridesetname")
	t.like(executed[0]?.args, { ride: 7 })
})

test.serial("ignores rides created by a placement preview", (t) => {
	const { execute, executed } = setup()

	execute(rideCreateEvent(GAME_COMMAND_FLAG_GHOST))

	t.is(executed.length, 0)
})

test.serial("names a pre-built ride after the design has been placed", (t) => {
	const { execute, executed } = setup([WindowClass.TrackDesignPlace])

	execute(rideCreateEvent())
	t.is(executed.length, 0, "the game still has to name it after the design")

	execute(trackDesignEvent())

	t.is(executed.length, 1)
	t.is(executed[0]?.action, "ridesetname")
	t.like(executed[0]?.args, { ride: 7 })
})

test.serial("does not name a pre-built ride when the placement failed", (t) => {
	const { execute, executed } = setup([WindowClass.TrackDesignList])

	execute(rideCreateEvent())
	execute(trackDesignEvent(0, 1))

	t.is(executed.length, 0)
})

test.serial("does not name the preview ride of a design placement", (t) => {
	const { execute, executed } = setup([WindowClass.TrackDesignPlace])

	execute(rideCreateEvent(GAME_COMMAND_FLAG_GHOST))
	execute(trackDesignEvent(GAME_COMMAND_FLAG_GHOST))

	t.is(executed.length, 0)
})
