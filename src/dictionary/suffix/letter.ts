import { NameSet } from "../../generator"
import { COASTERS, THRILL_RIDES } from "../set"

export default [
	{
		value: "XL",
		ride: [...COASTERS, ...THRILL_RIDES]
	},
	{
		value: "X",
		ride: [...COASTERS, ...THRILL_RIDES]
	},
	{
		value: "XXL",
		ride: [...COASTERS, ...THRILL_RIDES]
	}
] as NameSet[]
