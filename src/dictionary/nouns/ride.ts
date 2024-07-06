import {
	AIR_POWERED_VERTICAL_COASTER,
	BOAT_HIRE,
	BOBSLEIGH_COASTER,
	CAR_RIDE,
	CHAIRLIFT,
	CINEMA,
	CIRCUS,
	CLASSIC_MINI_ROLLER_COASTER,
	CLASSIC_STAND_UP_ROLLER_COASTER,
	CLASSIC_WOODEN_ROLLER_COASTER,
	COMPACT_INVERTED_COASTER,
	CORKSCREW_ROLLER_COASTER,
	CROOKED_HOUSE,
	DINGHY_SLIDE,
	DODGEMS,
	ENTERPRISE,
	FERRIS_WHEEL,
	FLYING_ROLLER_COASTER,
	FLYING_SAUCERS,
	GHOST_TRAIN,
	GIGA_COASTER,
	GO_KARTS,
	HAUNTED_HOUSE,
	HEARTLINE_TWISTER_COASTER,
	HYPER_TWISTER,
	HYPERCOASTER,
	INVERTED_HAIRPIN_COASTER,
	INVERTED_IMPULSE_COASTER,
	INVERTED_ROLLER_COASTER,
	JUNIOR_ROLLER_COASTER,
	LAUNCHED_FREEFALL,
	LAY_DOWN_ROLLER_COASTER,
	LIFT,
	LIM_LAUNCHED_ROLLER_COASTER,
	LOG_FLUME,
	LOOPING_ROLLER_COASTER,
	MAGIC_CARPET,
	MAZE,
	MERRY_GO_ROUND,
	MINE_RIDE,
	MINE_TRAIN_COASTER,
	MINI_GOLF,
	MINI_HELICOPTERS,
	MINI_ROLLER_COASTER,
	MINI_SUSPENDED_COASTER,
	MINIATURE_RAILWAY,
	MONORAIL_CYCLES,
	MONORAIL,
	MONSTER_TRUCKS,
	MOTION_SIMULATOR,
	MULTI_DIMENSION_ROLLER_COASTER,
	OBSERVATION_TOWER,
	REVERSE_FREEFALL_COASTER,
	REVERSER_ROLLER_COASTER,
	RIVER_RAFTS,
	RIVER_RAPIDS,
	ROTO_DROP,
	SIDE_FRICTION_ROLLER_COASTER,
	SPACE_RINGS,
	SPINNING_WILD_MOUSE,
	SPIRAL_ROLLER_COASTER,
	SPIRAL_SLIDE,
	SPLASH_BOATS,
	STAND_UP_ROLLER_COASTER,
	STEEPLECHASE,
	SUBMARINE_RIDE,
	SUSPENDED_MONORAIL,
	SUSPENDED_SWINGING_COASTER,
	SWINGING_INVERTER_SHIP,
	SWINGING_SHIP,
	TOP_SPIN,
	TWIST,
	TWISTER_ROLLER_COASTER,
	VERTICAL_DROP_ROLLER_COASTER,
	VIRGINIA_REEL,
	WATER_COASTER,
	STEEL_WILD_MOUSE,
	WOODEN_ROLLER_COASTER,
	WOODEN_WILD_MOUSE,
	FOOD_STALL,
	DRINK_STALL,
	SHOP,
	INFORMATION_KIOSK,
	TOILETS,
	CASH_MACHINE,
	FIRST_AID,
	MULTI_DIMENSION_ROLLER_COASTER_ALT,
	FLYING_ROLLER_COASTER_ALT,
	LAY_DOWN_ROLLER_COASTER_ALT,
	HYBRID_COASTER,
	SINGLE_RAIL_ROLLER_COASTER,
	ALPINE_COASTER
} from "../../enum/rideType"
import { NameSet } from "../../generator"

export default [
	{
		value: "Trains",
		ride: [
			MINIATURE_RAILWAY,
			MONORAIL,
			GHOST_TRAIN,
			MINE_TRAIN_COASTER,
			SUSPENDED_MONORAIL
		]
	},
	{
		value: "Train",
		ride: [
			MINIATURE_RAILWAY,
			GHOST_TRAIN,
			MONORAIL,
			MINE_TRAIN_COASTER,
			SUSPENDED_MONORAIL,
			MINE_RIDE
		]
	},
	{
		value: "Railway",
		ride: [
			MINIATURE_RAILWAY,
			MONORAIL_CYCLES,
			MONORAIL,
			CHAIRLIFT,
			SUSPENDED_MONORAIL,
			GHOST_TRAIN,
			WOODEN_ROLLER_COASTER,
			JUNIOR_ROLLER_COASTER,
			WOODEN_WILD_MOUSE,
			STEEPLECHASE,
			CAR_RIDE,
			MINE_TRAIN_COASTER,
			SIDE_FRICTION_ROLLER_COASTER,
			VIRGINIA_REEL,
			MINE_RIDE,
			CLASSIC_WOODEN_ROLLER_COASTER
		]
	},
	{
		value: "Track",
		ride: [
			MINIATURE_RAILWAY,
			MONORAIL,
			STEEPLECHASE,
			MINE_TRAIN_COASTER,
			CHAIRLIFT,
			GO_KARTS,
			SIDE_FRICTION_ROLLER_COASTER,
			VIRGINIA_REEL,
			SUSPENDED_MONORAIL,
			MONORAIL_CYCLES,
			MINE_RIDE,
			MONSTER_TRUCKS,
			ALPINE_COASTER,
			CLASSIC_WOODEN_ROLLER_COASTER
		]
	},
	{
		value: "Tracks",
		ride: [
			MINIATURE_RAILWAY,
			MONORAIL,
			STEEPLECHASE,
			MINE_TRAIN_COASTER,
			CHAIRLIFT,
			MAZE,
			GO_KARTS,
			SIDE_FRICTION_ROLLER_COASTER,
			SUSPENDED_MONORAIL,
			MONSTER_TRUCKS,
			ALPINE_COASTER,
			CLASSIC_WOODEN_ROLLER_COASTER
		]
	},
	{
		value: "Railroad",
		ride: [
			MINIATURE_RAILWAY,
			MINE_TRAIN_COASTER,
			MONORAIL_CYCLES,
			MINE_RIDE
		]
	},
	{
		value: "Rail Line",
		ride: [
			MINIATURE_RAILWAY,
			MONORAIL,
			CHAIRLIFT,
			SUSPENDED_MONORAIL,
			MONORAIL_CYCLES
		]
	},
	{
		value: "Line",
		ride: [
			MINIATURE_RAILWAY,
			MONORAIL,
			STEEPLECHASE,
			CHAIRLIFT,
			MAZE,
			LIFT,
			VIRGINIA_REEL,
			SUSPENDED_MONORAIL,
			MONORAIL_CYCLES,
			ALPINE_COASTER
		]
	},
	{
		value: "Transport",
		ride: [MINIATURE_RAILWAY, CHAIRLIFT, LIFT, SUSPENDED_MONORAIL]
	},
	{
		value: "Transportation",
		ride: [MINIATURE_RAILWAY, CHAIRLIFT, LIFT, SUSPENDED_MONORAIL]
	},
	{
		value: "Metro",
		ride: [MONORAIL]
	},
	{
		value: "Monorail",
		ride: [MONORAIL, SUSPENDED_MONORAIL, MINI_HELICOPTERS, MONORAIL_CYCLES]
	},
	{
		value: "Chairlift",
		ride: [CHAIRLIFT]
	},
	{
		value: "Lift",
		ride: [LIFT, FERRIS_WHEEL]
	},
	{
		value: "Elevator",
		ride: [LIFT, FERRIS_WHEEL]
	},
	{
		value: "Gondolas",
		ride: [
			SUSPENDED_MONORAIL,
			FERRIS_WHEEL,
			MINI_SUSPENDED_COASTER,
			FERRIS_WHEEL,
			VIRGINIA_REEL,
			FLYING_SAUCERS,
			INVERTED_HAIRPIN_COASTER
		]
	},
	{
		value: "House",
		ride: [HAUNTED_HOUSE, CROOKED_HOUSE, CIRCUS, GHOST_TRAIN, SPIRAL_SLIDE]
	},
	{
		value: "Wheel",
		ride: [FERRIS_WHEEL]
	},
	{
		value: "Carousel",
		ride: [MERRY_GO_ROUND, FERRIS_WHEEL]
	},
	{
		value: "Merry-Go-Round",
		ride: [MERRY_GO_ROUND]
	},
	{
		value: "Roundabout",
		ride: [MERRY_GO_ROUND, MAGIC_CARPET]
	},
	{
		value: "Whirligig",
		ride: [MERRY_GO_ROUND]
	},
	{
		value: "Mill",
		ride: [MERRY_GO_ROUND]
	},
	{
		value: "Galloper",
		ride: [MERRY_GO_ROUND]
	},
	{
		value: "Carrousel",
		ride: [MERRY_GO_ROUND]
	},
	{
		value: "Molen",
		ride: [MERRY_GO_ROUND]
	},
	{
		value: "Galopant",
		ride: [MERRY_GO_ROUND]
	},
	{
		value: "Putt-Putt",
		ride: [MINI_GOLF]
	},
	{
		value: "Mini-Putt",
		ride: [MINI_GOLF]
	},
	{
		value: "Golfing",
		ride: [MINI_GOLF]
	},
	{
		value: "Course",
		ride: [MINI_GOLF, MONSTER_TRUCKS]
	},
	{
		value: "Greens",
		ride: [MINI_GOLF]
	},
	{
		value: "Holes",
		ride: [MINI_GOLF]
	},
	{
		value: "Putting",
		ride: [MINI_GOLF]
	},
	{
		value: "Hole in One",
		ride: [MINI_GOLF]
	},
	{
		value: "Tower",
		ride: [
			OBSERVATION_TOWER,
			LAUNCHED_FREEFALL,
			LIFT,
			SPIRAL_SLIDE,
			FERRIS_WHEEL
		]
	},
	{
		value: "Slide",
		ride: [SPIRAL_SLIDE, DINGHY_SLIDE]
	},
	{
		value: "Cars",
		ride: [DODGEMS, CAR_RIDE, GO_KARTS]
	},
	{
		value: "Vehicles",
		ride: [CAR_RIDE, GO_KARTS, MONSTER_TRUCKS]
	},
	{
		value: "Bikes",
		ride: [MONORAIL_CYCLES]
	},
	{
		value: "Automobiles",
		ride: [CAR_RIDE, GO_KARTS]
	},
	{
		value: "Wheels",
		ride: [CAR_RIDE, GO_KARTS, DODGEMS, MONORAIL_CYCLES, MONSTER_TRUCKS]
	},
	{
		value: "Motors",
		ride: [CAR_RIDE, GO_KARTS, MONSTER_TRUCKS]
	},
	{
		value: "Wagons",
		ride: [CAR_RIDE, VIRGINIA_REEL, MONSTER_TRUCKS]
	},
	{
		value: "Dodgems",
		ride: [DODGEMS]
	},
	{
		value: "Rings",
		ride: [SPACE_RINGS, FLYING_SAUCERS]
	},
	{
		value: "Roller Coaster",
		ride: [
			CLASSIC_MINI_ROLLER_COASTER,
			CLASSIC_STAND_UP_ROLLER_COASTER,
			CLASSIC_WOODEN_ROLLER_COASTER,
			CLASSIC_WOODEN_ROLLER_COASTER,
			CORKSCREW_ROLLER_COASTER,
			FLYING_ROLLER_COASTER,
			INVERTED_ROLLER_COASTER,
			JUNIOR_ROLLER_COASTER,
			LAY_DOWN_ROLLER_COASTER,
			LIM_LAUNCHED_ROLLER_COASTER,
			LOOPING_ROLLER_COASTER,
			MINI_ROLLER_COASTER,
			MULTI_DIMENSION_ROLLER_COASTER,
			MULTI_DIMENSION_ROLLER_COASTER_ALT,
			REVERSER_ROLLER_COASTER,
			SIDE_FRICTION_ROLLER_COASTER,
			SPIRAL_ROLLER_COASTER,
			STAND_UP_ROLLER_COASTER,
			STAND_UP_ROLLER_COASTER,
			TWISTER_ROLLER_COASTER,
			VERTICAL_DROP_ROLLER_COASTER,
			WOODEN_ROLLER_COASTER,
			MINI_SUSPENDED_COASTER,
			WOODEN_WILD_MOUSE,
			FLYING_ROLLER_COASTER_ALT,
			LAY_DOWN_ROLLER_COASTER_ALT,
			SINGLE_RAIL_ROLLER_COASTER,
			ALPINE_COASTER,
			BOBSLEIGH_COASTER,
			INVERTED_HAIRPIN_COASTER,
			MINE_RIDE,
			HYPERCOASTER,
			HYPER_TWISTER,
			SPINNING_WILD_MOUSE,
			HYBRID_COASTER,
			ALPINE_COASTER
		]
	},
	{
		value: "Mouse",
		ride: [STEEL_WILD_MOUSE, WOODEN_WILD_MOUSE, SPINNING_WILD_MOUSE]
	},
	{
		value: "Coaster",
		ride: [
			AIR_POWERED_VERTICAL_COASTER,
			BOBSLEIGH_COASTER,
			COMPACT_INVERTED_COASTER,
			GIGA_COASTER,
			HEARTLINE_TWISTER_COASTER,
			HYPER_TWISTER,
			INVERTED_HAIRPIN_COASTER,
			INVERTED_IMPULSE_COASTER,
			INVERTED_IMPULSE_COASTER,
			MINE_TRAIN_COASTER,
			MINI_SUSPENDED_COASTER,
			REVERSE_FREEFALL_COASTER,
			SUSPENDED_SWINGING_COASTER,
			WATER_COASTER,
			LOOPING_ROLLER_COASTER,
			WOODEN_ROLLER_COASTER,
			SPIRAL_ROLLER_COASTER,
			STAND_UP_ROLLER_COASTER,
			SUSPENDED_SWINGING_COASTER,
			INVERTED_ROLLER_COASTER,
			JUNIOR_ROLLER_COASTER,
			WOODEN_WILD_MOUSE,
			MULTI_DIMENSION_ROLLER_COASTER_ALT,
			FLYING_ROLLER_COASTER_ALT,
			LAY_DOWN_ROLLER_COASTER_ALT,
			HYBRID_COASTER,
			SINGLE_RAIL_ROLLER_COASTER,
			ALPINE_COASTER,
			MINI_ROLLER_COASTER,
			MINE_RIDE,
			LIM_LAUNCHED_ROLLER_COASTER,
			HYPERCOASTER,
			HYPER_TWISTER,
			SPINNING_WILD_MOUSE,
			CLASSIC_MINI_ROLLER_COASTER
		]
	},
	{
		value: "Steeplechase",
		ride: [STEEPLECHASE]
	},
	{
		value: "Twist",
		ride: [TWIST]
	},
	{
		value: "Twister",
		ride: [HYPER_TWISTER]
	},
	{
		value: "Scrambler",
		ride: [TWIST, HYPER_TWISTER]
	},
	{
		value: "Breakdance",
		ride: [TWIST]
	},
	{
		value: "Polyp",
		ride: [TWIST]
	},
	{
		value: "Freefall",
		ride: [LAUNCHED_FREEFALL]
	},
	{
		value: "Fall",
		ride: [LAUNCHED_FREEFALL, DINGHY_SLIDE, SPIRAL_SLIDE, HYBRID_COASTER]
	},
	{
		value: "Ship",
		ride: [SWINGING_SHIP, SWINGING_INVERTER_SHIP, BOAT_HIRE, DINGHY_SLIDE]
	},
	{
		value: "Karts",
		ride: [GO_KARTS, CAR_RIDE]
	},
	{
		value: "Simulator",
		ride: [MOTION_SIMULATOR, SPACE_RINGS]
	},
	{
		value: "Cinema",
		ride: [CINEMA]
	},
	{
		value: "Theater",
		ride: [CINEMA, CIRCUS, CROOKED_HOUSE, HAUNTED_HOUSE]
	},
	{
		value: "Gravitron",
		ride: [TOP_SPIN, TWIST]
	},
	{
		value: "Spin",
		ride: [
			TOP_SPIN,
			SPACE_RINGS,
			SPIRAL_ROLLER_COASTER,
			SPIRAL_SLIDE,
			MAGIC_CARPET
		]
	},
	{
		value: "Flume",
		ride: [LOG_FLUME]
	},
	{
		value: "Rapids",
		ride: [RIVER_RAPIDS]
	},
	{
		value: "Rafts",
		ride: [RIVER_RAFTS]
	},
	{
		value: "Boat Hire",
		ride: [BOAT_HIRE]
	},
	{
		value: "Boat",
		ride: [SWINGING_SHIP]
	},
	{
		value: "Steeplechase",
		ride: [STEEPLECHASE]
	},
	{
		value: "Cycles",
		ride: [MONORAIL_CYCLES]
	},
	{
		value: "Maze",
		ride: [MAZE, CROOKED_HOUSE, HAUNTED_HOUSE, GHOST_TRAIN]
	},
	{
		value: "Labyrinth",
		ride: [MAZE, CROOKED_HOUSE]
	},
	{
		value: "Puzzle",
		ride: [MAZE, CROOKED_HOUSE]
	},
	{
		value: "Riddle",
		ride: [MAZE, CROOKED_HOUSE]
	},
	{
		value: "Golf",
		ride: [MINI_GOLF]
	},
	{
		value: "Trucks",
		ride: [MONSTER_TRUCKS, CAR_RIDE]
	},
	{
		value: "Helicopters",
		ride: [MINI_HELICOPTERS]
	},
	{
		value: "Circus",
		ride: [CIRCUS, TWIST, DODGEMS, CROOKED_HOUSE]
	},
	{
		value: "Spectacle",
		ride: [
			CIRCUS,
			FLYING_SAUCERS,
			CROOKED_HOUSE,
			MAGIC_CARPET,
			MINI_ROLLER_COASTER,
			MINE_RIDE,
			HYBRID_COASTER
		]
	},
	{
		value: "Festival",
		ride: [CIRCUS]
	},
	{
		value: "Bazaar",
		ride: [CIRCUS, GHOST_TRAIN, CROOKED_HOUSE, MAGIC_CARPET]
	},
	{
		value: "Hippodrome",
		ride: [CIRCUS, CROOKED_HOUSE]
	},
	{
		value: "Show",
		ride: [CIRCUS]
	},
	{
		value: "Three-Ring",
		ride: [CIRCUS]
	},
	{
		value: "Kermis",
		ride: [CIRCUS]
	},
	{
		value: "Saucers",
		ride: [FLYING_SAUCERS, SPACE_RINGS]
	},
	{
		value: "Hypercoaster",
		ride: [HYPERCOASTER]
	},
	{
		value: "Ride",
		ride: [
			MINE_RIDE,
			CAR_RIDE,
			SUBMARINE_RIDE,
			TWIST,
			MONORAIL,
			CHAIRLIFT,
			DODGEMS,
			SPACE_RINGS,
			GHOST_TRAIN,
			FLYING_SAUCERS,
			JUNIOR_ROLLER_COASTER,
			MINI_SUSPENDED_COASTER,
			MONSTER_TRUCKS
		]
	},
	{
		value: "Virginia Reel",
		ride: [VIRGINIA_REEL]
	},
	{
		value: "Carpet",
		ride: [MAGIC_CARPET]
	},
	{
		value: "Roto-Drop",
		ride: [ROTO_DROP]
	},
	{
		value: "Gyro Drop",
		ride: [ROTO_DROP]
	},
	{
		value: "Drop",
		ride: [LAUNCHED_FREEFALL, DINGHY_SLIDE, SPIRAL_SLIDE]
	},
	{
		value: "Enterprise",
		ride: [ENTERPRISE]
	},
	{
		value: "Boats",
		ride: [BOAT_HIRE, SPLASH_BOATS, DINGHY_SLIDE, RIVER_RAFTS]
	},
	{
		value: "Dock",
		ride: [BOAT_HIRE, SPLASH_BOATS, RIVER_RAFTS]
	},
	{
		value: "Docks",
		ride: [
			BOAT_HIRE,
			SPLASH_BOATS,
			WATER_COASTER,
			SUBMARINE_RIDE,
			RIVER_RAFTS
		]
	},
	{
		value: "Harbor",
		ride: [
			BOAT_HIRE,
			SWINGING_SHIP,
			SPLASH_BOATS,
			WATER_COASTER,
			SUBMARINE_RIDE,
			RIVER_RAFTS
		]
	},
	{
		value: "Port",
		ride: [
			BOAT_HIRE,
			LOG_FLUME,
			RIVER_RAPIDS,
			SWINGING_SHIP,
			SPLASH_BOATS,
			WATER_COASTER,
			SUBMARINE_RIDE
		]
	},
	{
		value: "Marina",
		ride: [BOAT_HIRE, SPLASH_BOATS, SUBMARINE_RIDE]
	},
	{
		value: "Wharf",
		ride: [BOAT_HIRE, RIVER_RAPIDS, SPLASH_BOATS, WATER_COASTER]
	},
	{
		value: "Submarines",
		ride: [SUBMARINE_RIDE]
	},
	{
		value: "Submarine",
		ride: [SUBMARINE_RIDE]
	},
	{
		value: "Stall",
		ride: [FOOD_STALL, DRINK_STALL, INFORMATION_KIOSK]
	},
	{
		value: "Shop",
		ride: [FOOD_STALL, DRINK_STALL, SHOP, INFORMATION_KIOSK]
	},
	{
		value: "Store",
		ride: [FOOD_STALL, DRINK_STALL, SHOP]
	},
	{
		value: "Vendor",
		ride: [FOOD_STALL, DRINK_STALL, SHOP]
	},
	{
		value: "Kiosk",
		ride: [INFORMATION_KIOSK, FOOD_STALL, DRINK_STALL]
	},
	{
		value: "Point",
		ride: [
			INFORMATION_KIOSK,
			BOAT_HIRE,
			LAUNCHED_FREEFALL,
			RIVER_RAPIDS,
			FOOD_STALL,
			DRINK_STALL,
			CINEMA,
			LIFT,
			SPLASH_BOATS,
			FLYING_SAUCERS,
			CROOKED_HOUSE,
			MAGIC_CARPET,
			SUBMARINE_RIDE,
			ALPINE_COASTER
		]
	},
	{
		value: "Rotunda",
		ride: [INFORMATION_KIOSK]
	},
	{
		value: "Counter",
		ride: [INFORMATION_KIOSK]
	},
	{
		value: "Restaurant",
		ride: [FOOD_STALL]
	},
	{
		value: "Bistro",
		ride: [FOOD_STALL]
	},
	{
		value: "Saloon",
		ride: [FOOD_STALL, DRINK_STALL]
	},
	{
		value: "Inn",
		ride: [FOOD_STALL, DRINK_STALL, INFORMATION_KIOSK]
	},
	{
		value: "Outlet",
		ride: [FOOD_STALL, DRINK_STALL, SHOP]
	},
	{
		value: "Fountain",
		ride: [DRINK_STALL]
	},
	{
		value: "Market",
		ride: [SHOP]
	},
	{
		value: "Stand",
		ride: [SHOP, INFORMATION_KIOSK]
	},
	{
		value: "Boutique",
		ride: [SHOP]
	},
	{
		value: "Emporium",
		ride: [SHOP]
	},
	{
		value: "Chain",
		ride: [SHOP]
	},
	{
		value: "Buy",
		ride: [SHOP]
	},
	{
		value: "Purchase",
		ride: [SHOP]
	},
	{
		value: "Toilet",
		ride: [TOILETS]
	},
	{
		value: "Toilets",
		ride: [TOILETS]
	},
	{
		value: "Restroom",
		ride: [TOILETS]
	},
	{
		value: "Restrooms",
		ride: [TOILETS]
	},
	{
		value: "Bathroom",
		ride: [TOILETS]
	},
	{
		value: "Lavatory",
		ride: [TOILETS]
	},
	{
		value: "Washroom",
		ride: [TOILETS]
	},
	{
		value: "Water Closet",
		ride: [TOILETS]
	},
	{
		value: "Powder Room",
		ride: [TOILETS]
	},
	{
		value: "WC",
		ride: [TOILETS]
	},
	{
		value: "Machine",
		ride: [CASH_MACHINE, LAUNCHED_FREEFALL]
	},
	{
		value: "ATM",
		ride: [CASH_MACHINE]
	},
	{
		value: "Teller",
		ride: [CASH_MACHINE]
	},
	{
		value: "Bank",
		ride: [CASH_MACHINE]
	},
	{
		value: "Treasure",
		ride: [CASH_MACHINE]
	},
	{
		value: "Money",
		ride: [CASH_MACHINE]
	},
	{
		value: "Coins",
		ride: [CASH_MACHINE]
	},
	{
		value: "Bills",
		ride: [CASH_MACHINE]
	},
	{
		value: "Capital",
		ride: [CASH_MACHINE]
	},
	{
		value: "Pesos",
		ride: [CASH_MACHINE]
	},
	{
		value: "Booth",
		ride: [INFORMATION_KIOSK]
	},
	{
		value: "Cabin",
		ride: [INFORMATION_KIOSK]
	},
	{
		value: "Aid",
		ride: [FIRST_AID]
	},
	{
		value: "First Aid",
		ride: [FIRST_AID]
	},
	{
		value: "Helter Skelter",
		ride: [SPIRAL_SLIDE]
	},
	{
		value: "Tumble",
		ride: [SPIRAL_SLIDE, SWINGING_SHIP, FLYING_SAUCERS]
	},
	{
		value: "Skate",
		ride: [SPIRAL_SLIDE]
	},
	{
		value: "Slip",
		ride: [SPIRAL_SLIDE]
	},
	{
		value: "Vessel",
		ride: [SWINGING_SHIP, SWINGING_INVERTER_SHIP, FLYING_SAUCERS]
	},
	{
		value: "Barge",
		ride: [SWINGING_SHIP, SUBMARINE_RIDE]
	},
	{
		value: "Gondola",
		ride: [SWINGING_SHIP, SWINGING_INVERTER_SHIP, LIFT, MAGIC_CARPET]
	},
	{
		value: "Raft",
		ride: [SWINGING_SHIP]
	},
	{
		value: "Ark",
		ride: [SWINGING_SHIP, SWINGING_INVERTER_SHIP, CINEMA]
	},
	{
		value: "Emergency",
		ride: [FIRST_AID]
	},
	{
		value: "Assistance",
		ride: [FIRST_AID]
	},
	{
		value: "Treatment",
		ride: [FIRST_AID]
	},
	{
		value: "Clinic",
		ride: [FIRST_AID]
	},
	{
		value: "Ward",
		ride: [FIRST_AID]
	},
	{
		value: "Health Service",
		ride: [FIRST_AID]
	},
	{
		value: "Sick Bay",
		ride: [FIRST_AID]
	},
	{
		value: "Emergency Room",
		ride: [FIRST_AID]
	}
] as NameSet[]
