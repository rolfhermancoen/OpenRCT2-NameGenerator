import { RideType } from "./enum/rideType"
import { VehicleType } from "./enum/vehicleType"
import { generateName } from "./generator"

export function main() {
	// Register a menu item under the map icon:
	// if (typeof ui !== "undefined") {
	// 	ui.registerMenuItem("NameGenerator", () => onClickMenuItem())
	// }
	context.subscribe("action.execute", (event) => {
		switch (event.action) {
			case "ridecreate": {
				if ("rideObject" in event.args && "rideType" in event.args) {
					const object = objectManager.getObject(
						"ride",
						event.args.rideObject as number
					)
					console.log(
						generateName(
							event.args.rideType as RideType,
							object.identifier as VehicleType
						)
					)
				}
				break
			}
			default:
				break
		}
	})
}
