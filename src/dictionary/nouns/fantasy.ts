import {
	AIR_POWERED_VERTICAL_COASTER,
	BOBSLEIGH_COASTER,
	CINEMA,
	CLASSIC_MINI_ROLLER_COASTER,
	CLASSIC_STAND_UP_ROLLER_COASTER,
	CORKSCREW_ROLLER_COASTER,
	FERRIS_WHEEL,
	FLYING_ROLLER_COASTER,
	FLYING_ROLLER_COASTER_ALT,
	FLYING_SAUCERS,
	GHOST_TRAIN,
	GIGA_COASTER,
	HAUNTED_HOUSE,
	HEARTLINE_TWISTER_COASTER,
	HYBRID_COASTER,
	HYPER_TWISTER,
	INVERTED_HAIRPIN_COASTER,
	INVERTED_IMPULSE_COASTER,
	INVERTED_ROLLER_COASTER,
	LOG_FLUME,
	LOOPING_ROLLER_COASTER,
	MAZE,
	MERRY_GO_ROUND,
	MINE_RIDE,
	MINI_GOLF,
	MONSTER_TRUCKS,
	MOTION_SIMULATOR,
	REVERSER_ROLLER_COASTER,
	RIVER_RAPIDS,
	ROTO_DROP,
	SIDE_FRICTION_ROLLER_COASTER,
	SPIRAL_ROLLER_COASTER,
	STAND_UP_ROLLER_COASTER,
	STEEL_WILD_MOUSE,
	SUBMARINE_RIDE,
	SUSPENDED_SWINGING_COASTER,
	TWIST,
	TWISTER_ROLLER_COASTER,
	VERTICAL_DROP_ROLLER_COASTER,
	WATER_COASTER,
	WOODEN_ROLLER_COASTER,
	WOODEN_WILD_MOUSE
} from "../../enum/rideType"
import { NameSet } from "../../generator"

export default [
	{
		value: "Firebird",
		ride: [
			STAND_UP_ROLLER_COASTER,
			SUSPENDED_SWINGING_COASTER,
			LOOPING_ROLLER_COASTER,
			CORKSCREW_ROLLER_COASTER,
			MOTION_SIMULATOR,
			VERTICAL_DROP_ROLLER_COASTER,
			TWIST,
			TWISTER_ROLLER_COASTER,
			HEARTLINE_TWISTER_COASTER,
			GIGA_COASTER,
			ROTO_DROP,
			AIR_POWERED_VERTICAL_COASTER,
			INVERTED_IMPULSE_COASTER,
			HYPER_TWISTER,
			CLASSIC_STAND_UP_ROLLER_COASTER
		]
	},
	{
		value: "Wolf",
		ride: [
			STAND_UP_ROLLER_COASTER,
			LOOPING_ROLLER_COASTER,
			CORKSCREW_ROLLER_COASTER,
			VERTICAL_DROP_ROLLER_COASTER,
			SIDE_FRICTION_ROLLER_COASTER,
			HEARTLINE_TWISTER_COASTER,
			GIGA_COASTER,
			AIR_POWERED_VERTICAL_COASTER,
			HYPER_TWISTER,
			CLASSIC_MINI_ROLLER_COASTER
		]
	},
	{
		value: "Scorcher",
		ride: [
			STAND_UP_ROLLER_COASTER,
			WOODEN_WILD_MOUSE,
			LOOPING_ROLLER_COASTER,
			CORKSCREW_ROLLER_COASTER,
			MOTION_SIMULATOR,
			VERTICAL_DROP_ROLLER_COASTER,
			TWIST,
			WOODEN_ROLLER_COASTER,
			REVERSER_ROLLER_COASTER,
			HEARTLINE_TWISTER_COASTER,
			GIGA_COASTER,
			ROTO_DROP,
			FLYING_SAUCERS,
			AIR_POWERED_VERTICAL_COASTER,
			HYPER_TWISTER,
			HYBRID_COASTER,
			CLASSIC_STAND_UP_ROLLER_COASTER
		]
	},
	{
		value: "Banshee",
		ride: [
			INVERTED_ROLLER_COASTER,
			SUSPENDED_SWINGING_COASTER,
			LOOPING_ROLLER_COASTER,
			CORKSCREW_ROLLER_COASTER,
			VERTICAL_DROP_ROLLER_COASTER,
			HAUNTED_HOUSE,
			FLYING_ROLLER_COASTER,
			FLYING_ROLLER_COASTER_ALT,
			HEARTLINE_TWISTER_COASTER,
			GIGA_COASTER,
			ROTO_DROP,
			AIR_POWERED_VERTICAL_COASTER,
			INVERTED_HAIRPIN_COASTER,
			INVERTED_IMPULSE_COASTER,
			HYPER_TWISTER,
			HYBRID_COASTER,
			CLASSIC_STAND_UP_ROLLER_COASTER
		]
	},
	{
		value: "Pheonix",
		ride: [
			SPIRAL_ROLLER_COASTER,
			SUSPENDED_SWINGING_COASTER,
			LOOPING_ROLLER_COASTER,
			CORKSCREW_ROLLER_COASTER,
			VERTICAL_DROP_ROLLER_COASTER,
			STEEL_WILD_MOUSE,
			FLYING_ROLLER_COASTER,
			FLYING_ROLLER_COASTER_ALT,
			HEARTLINE_TWISTER_COASTER,
			GIGA_COASTER,
			AIR_POWERED_VERTICAL_COASTER,
			INVERTED_IMPULSE_COASTER,
			HYPER_TWISTER,
			HYBRID_COASTER,
			CLASSIC_STAND_UP_ROLLER_COASTER
		]
	},
	{
		value: "Yeti",
		ride: [BOBSLEIGH_COASTER, HEARTLINE_TWISTER_COASTER]
	},
	{
		value: "Snow Man",
		ride: [BOBSLEIGH_COASTER]
	},
	{
		value: "Quest",
		ride: [
			MAZE,
			LOG_FLUME,
			RIVER_RAPIDS,
			MERRY_GO_ROUND,
			MOTION_SIMULATOR,
			CINEMA,
			GHOST_TRAIN,
			REVERSER_ROLLER_COASTER,
			MINI_GOLF,
			WATER_COASTER,
			INVERTED_HAIRPIN_COASTER,
			SUBMARINE_RIDE,
			MINE_RIDE,
			MONSTER_TRUCKS
		]
	},
	{
		value: "Eye",
		ride: [FERRIS_WHEEL, CINEMA]
	}
] as NameSet[]
