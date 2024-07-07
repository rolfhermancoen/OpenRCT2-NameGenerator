import adjectives from "./dictionary/adjective"
import { filterNameSet } from "./filter"
import nouns from "./dictionary/nouns"
import suffixes from "./dictionary/suffix"
import { RideType } from "./enum/rideType"
import { VehicleType } from "./enum/vehicleType"

// Define the NameSet type
export type NameSet = {
	value: string
	ride?: RideType[]
	vehicle?: VehicleType[]
}

// Type for the memoization cache key
type CacheKey =
	`${"adjective" | "noun" | "suffix"}-${RideType | "none"}-${VehicleType | "none"}`

// Configuration object for empty chance values
const EMPTY_CHANCE_CONFIG = {
	adjective: 0.1,
	suffix: 0.8
}

// Utility function to get a random element from an array
const getRandomElement = (
	array: NameSet[],
	emptyChance = 0
): NameSet | null => {
	if (Math.random() < emptyChance) {
		return null
	}

	if (array.length === 0) {
		return null
	}

	const randomIndex = Math.floor(Math.random() * array.length)
	return array[randomIndex] ?? null
}

// Memoize the filterNameSet results to improve performance
const memoizeFilterNameSet = (() => {
	const cache: Record<CacheKey, NameSet[]> = {} as Record<CacheKey, NameSet[]>

	return (
		source: NameSet[],
		type: "adjective" | "noun" | "suffix",
		rideType?: RideType,
		vehicleType?: VehicleType
	): NameSet[] => {
		const key: CacheKey = `${type}-${rideType ?? "none"}-${vehicleType ?? "none"}`

		if (!cache[key]) {
			cache[key] = filterNameSet(source, rideType, vehicleType)
		}
		return cache[key] || []
	}
})()

// Generate a name based on optional rideType and vehicleType
export const generateName = (
	rideType?: RideType,
	vehicleType?: VehicleType
): string => {
	const adjective = getRandomElement(
		memoizeFilterNameSet(adjectives, "adjective", rideType, vehicleType),
		EMPTY_CHANCE_CONFIG.adjective
	)?.value
	const noun = getRandomElement(
		memoizeFilterNameSet(nouns, "noun", rideType, vehicleType)
	)?.value
	const suffix = getRandomElement(
		memoizeFilterNameSet(suffixes, "suffix", rideType, vehicleType),
		EMPTY_CHANCE_CONFIG.suffix
	)?.value

	return [adjective, noun, suffix].filter(Boolean).join(" ")
}
