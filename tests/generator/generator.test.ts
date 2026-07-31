import test from "ava"
import { generateName } from "../../src/generator"
import { RideType } from "../../src/enum/rideType"

const SKIPPABLE_RIDE_TYPES = [
	RideType.UNKNOWN_29,
	RideType.UNKNOWN_31,
	RideType.UNKNOWN_34,
	RideType.UNKNOWN_80,
	RideType.UNKNOWN_82,
	RideType.UNKNOWN_83,
	RideType.UNKNOWN_84,
	RideType.UNKNOWN_85,
	RideType.UNKNOWN_89,
	RideType.MULTI_DIMENSION_ROLLER_COASTER_ALT,
	RideType.FLYING_ROLLER_COASTER_ALT,
	RideType.LAY_DOWN_ROLLER_COASTER_ALT
]

function isNumeric(value: string) {
	return /^\d+$/.test(value)
}

test("generates a random name", (t) => {
	const keys = Object.keys(RideType).filter((key) => isNumeric(key))

	for (let i = 0; i < keys.length; i++) {
		if (
			SKIPPABLE_RIDE_TYPES.some(
				(t) => t.toString() === keys[i].toString()
			)
		) {
			continue
		}

		const name = generateName(keys[i] as unknown as RideType)

		t.is(typeof name, "string", keys[i])
		t.not(name, "", keys[i])
	}
})

test("generates a name for a ride type that is not in the dictionary", (t) => {
	const unknownRideType = 255 as unknown as RideType

	const name = generateName(unknownRideType)

	t.is(typeof name, "string")
	t.not(name, "")
})

test("generates a random name based on rideType", (t) => {
	const keys = Object.keys(RideType).filter((key) => isNumeric(key))

	for (let i = 0; i < keys.length; i++) {
		if (
			SKIPPABLE_RIDE_TYPES.some(
				(t) => t.toString() === keys[i].toString()
			)
		) {
			continue
		}

		const name = generateName(keys[i] as unknown as RideType)

		t.is(typeof name, "string", keys[i])
		t.not(name, "", keys[i])
	}
})
