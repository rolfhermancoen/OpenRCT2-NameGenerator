import { RideType } from "../enum/rideType"
import { VehicleType } from "../enum/vehicleType"
import { NameSet } from "../generator"

export const filterNameSet = (
	array: readonly NameSet[],
	rideType?: RideType,
	vehicleType?: VehicleType
) => {
	return array.filter((val) => {
		if (
			rideType !== undefined &&
			val.ride &&
			!val.ride.some((t) => t.toString() === rideType.toString())
		) {
			return false
		}
		if (
			vehicleType !== undefined &&
			val.vehicle &&
			!val.vehicle.some((t) => t.toString() === vehicleType.toString())
		) {
			return false
		}
		return true
	})
}
