import { RideType } from "./enum/rideType"
import adjectives from "./dictionary/adjective"
import nouns from "./dictionary/nouns"
import suffixes from "./dictionary/suffix"
import { NameSet } from "./generator"
import { filterNameSet } from "./filter"

export const getNouns = (): NameSet[] => nouns
export const getRideTypeNouns = (rideType: RideType): NameSet[] =>
	filterNameSet(getNouns(), rideType)

export const getAdjectives = () => adjectives
export const getRideTypeAdjectives = (rideType: RideType): NameSet[] =>
	filterNameSet(getAdjectives(), rideType)

export const getSuffixes = (): NameSet[] => suffixes

export const getRideTypeSuffixes = (rideType: RideType): NameSet[] =>
	filterNameSet(getSuffixes(), rideType)
