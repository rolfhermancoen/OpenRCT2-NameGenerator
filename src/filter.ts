import { RideType } from "./enum/rideType"
import { VehicleType } from "./enum/vehicleType"
import { NameSet } from "./generator"

export const filterNameSet = (
	sets: NameSet[],
	rideType?: RideType,
	vehicleType?: VehicleType
) => {
	const matchesRideType = (set: NameSet) => {
		return (
			rideType === undefined ||
			!set.ride ||
			set.ride?.some((t) => t.toString() === rideType.toString())
		)
	}

	const matchesVehicleType = (set: NameSet) => {
		return (
			vehicleType === undefined ||
			!set.vehicle ||
			set.vehicle?.some((t) => t.toString() === vehicleType.toString())
		)
	}
	return sets.filter((set) => matchesRideType(set) && matchesVehicleType(set))
}
