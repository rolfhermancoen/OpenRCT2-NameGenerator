import test from "ava"
import { filterNameSet } from "../../src/dictionary/filter"
import { FERRIS_WHEEL, MERRY_GO_ROUND } from "../../src/enum/rideType"

export const TEST_NAME_SET = [
	{
		value: "A",
		ride: [MERRY_GO_ROUND]
	},
	{
		value: "B",
		ride: [FERRIS_WHEEL]
	},
	{
		value: "C",
		ride: [MERRY_GO_ROUND]
	},
	{
		value: "D",
		ride: []
	},
	{
		value: "E"
	}
]

test("filter", (t) => {
	const filteredNameSet = filterNameSet(TEST_NAME_SET, MERRY_GO_ROUND)

	t.is(filteredNameSet.length, 3)
})
