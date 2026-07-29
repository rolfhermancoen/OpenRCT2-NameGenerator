import {
	checkbox,
	compute,
	groupbox,
	horizontal,
	label,
	store,
	twoway,
	window
} from "openrct2-flexui"
import {
	NAMING_OPTIONS,
	NAMING_OPTION_LABELS,
	NamingOption,
	getNamingOption,
	setNamingOption
} from "../settings"

const checkedOptions = {
	customDesigns: store(false),
	rct1Designs: store(false),
	savedDesigns: store(false),
	shopsAndStalls: store(false),
	everything: store(false)
}

const namingCheckbox = (option: NamingOption) =>
	checkbox({
		text: NAMING_OPTION_LABELS[option],
		isChecked: twoway(checkedOptions[option]),
		disabled:
			option === "everything"
				? false
				: compute(
						checkedOptions.everything,
						(everything) => everything
					),
		onChange: (isChecked) => setNamingOption(option, isChecked)
	})

export const mainWindow = window({
	title: "NameGenerator",
	width: 360,
	height: 140,
	spacing: 5,
	onOpen: () => {
		for (const option of NAMING_OPTIONS) {
			checkedOptions[option].set(getNamingOption(option))
		}
	},
	content: [
		groupbox({
			text: "Generate names for",
			content: [
				horizontal([
					namingCheckbox("customDesigns"),
					namingCheckbox("rct1Designs")
				]),
				horizontal([
					namingCheckbox("savedDesigns"),
					namingCheckbox("shopsAndStalls")
				]),
				namingCheckbox("everything")
			]
		}),
		label({
			text: "github.com/rolfhermancoen/OpenRCT2-NameGenerator",
			tooltip: "Go to this URL to check for the latest updates",
			alignment: "centred",
			disabled: true
		}),
		label({
			text: `version ${__PLUGIN_VERSION__}`,
			alignment: "centred"
		})
	]
})
