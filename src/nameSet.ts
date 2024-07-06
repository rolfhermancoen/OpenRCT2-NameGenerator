import { RideType } from "./enum/rideType"
import adjectives from "./dictionary/adjective"
import nouns from "./dictionary/nouns"
import suffixes from "./dictionary/suffix"

export const getNouns = () => nouns

export const getRideTypeNouns = (rideType: RideType) => {
	return nouns.filter(
		(val) => !val.ride || val.ride.some((r) => r === rideType)
	)
}

export const getAdjectives = () => adjectives

export const getRideTypeAdjectives = (rideType: RideType) => {
	return adjectives.filter(
		(val) => !val.ride || val.ride.some((r) => r === rideType)
	)
}

export const getSuffixes = () => suffixes
