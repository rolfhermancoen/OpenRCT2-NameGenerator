export type NamingOption =
	| "customDesigns"
	| "rct1Designs"
	| "savedDesigns"
	| "shopsAndStalls"
	| "everything"

export const NAMING_OPTIONS: NamingOption[] = [
	"customDesigns",
	"rct1Designs",
	"savedDesigns",
	"shopsAndStalls",
	"everything"
]

export const NAMING_OPTION_LABELS: Record<NamingOption, string> = {
	customDesigns: "Custom designs",
	rct1Designs: "RCT1 u(0000) designs",
	savedDesigns: "Saved designs",
	shopsAndStalls: "Shops, stalls and facilities",
	everything: "All listed options"
}

const NAMING_OPTION_DEFAULTS: Record<NamingOption, boolean> = {
	customDesigns: true,
	rct1Designs: true,
	savedDesigns: false,
	shopsAndStalls: true,
	everything: false
}

const key = (option: NamingOption) => `NameGenerator.${option}`

export const getNamingOption = (option: NamingOption): boolean =>
	context.sharedStorage.get(key(option), NAMING_OPTION_DEFAULTS[option])

export const setNamingOption = (option: NamingOption, enabled: boolean) => {
	context.sharedStorage.set(key(option), enabled)
}
