import { NameSet } from "../../generator"
import { COASTERS, THRILL_RIDES } from "../set"

export default [
	{
		value: "Millenium",
		ride: [...COASTERS, ...THRILL_RIDES]
	},
	{
		value: "Reloaded",
		ride: [...COASTERS, ...THRILL_RIDES]
	}
] as NameSet[]
