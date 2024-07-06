import adjectives from "./dictionary/adjective"
import { filterNameSet } from "./dictionary/filter"
import nouns from "./dictionary/nouns"
import suffix from "./dictionary/suffix"
import { RideType } from "./enum/rideType"
import { VehicleType } from "./enum/vehicleType"

export type NameSet = {
	value: string
	ride?: readonly RideType[]
	vehicle?: readonly VehicleType[]
}

const getRand = (array: readonly NameSet[], emptyChange = 0) => {
	if (Math.random() < emptyChange) {
		return null
	}
	return array[Math.floor(Math.random() * array.length)]
}

export const generateName = (
	rideType?: RideType,
	vehicleType?: VehicleType
) => {
	return [
		getRand(filterNameSet(adjectives, rideType, vehicleType), 0.1)?.value,
		getRand(filterNameSet(nouns, rideType, vehicleType))?.value,
		getRand(filterNameSet(suffix, rideType, vehicleType), 0.8)?.value
	]
		.filter((val) => val !== undefined)
		.join(" ")
}
