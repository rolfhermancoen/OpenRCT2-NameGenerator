import { NameSet } from "../../generator"
import { COASTERS, THRILL_RIDES } from "../set"

export default [
	{
		value: "2000",
		ride: [...COASTERS, ...THRILL_RIDES]
	},
	{
		value: "One",
		ride: [...COASTERS, ...THRILL_RIDES]
	}
] as NameSet[]
