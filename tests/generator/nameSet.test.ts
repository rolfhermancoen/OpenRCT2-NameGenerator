import test from "ava"
import { RideType } from "../../src/enum/rideType"
import { getRideTypeAdjectives, getRideTypeNouns } from "../../src/nameSet"

const isNumeric = (value: string) => {
	return /^\d+$/.test(value)
}

test("get rideType nouns", (t) => {
	const keys = Object.keys(RideType).filter((key) => !isNumeric(key))

	for (let i = 0; i < keys.length; i++) {
		if (keys[i].search("UNKNOWN") === 0) {
			continue
		}

		const nameSets = getRideTypeNouns(
			RideType[keys[i] as unknown as number] as unknown as RideType
		)

		t.is(nameSets.length >= 10, true, keys[i] + ": " + nameSets.length)
	}
})

test("get rideType adjectives", (t) => {
	const keys = Object.keys(RideType).filter((key) => !isNumeric(key))

	for (let i = 0; i < keys.length; i++) {
		if (keys[i].search("UNKNOWN") === 0) {
			continue
		}

		const nameSets = getRideTypeAdjectives(
			RideType[keys[i] as unknown as number] as unknown as RideType
		)

		t.is(nameSets.length >= 10, true, keys[i] + ": " + nameSets.length)
	}
})
