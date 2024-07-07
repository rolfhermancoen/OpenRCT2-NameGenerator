import { label, window } from "openrct2-flexui"

export const mainWindow = window({
	title: "NameGenerator",
	width: 320,
	height: 60,
	spacing: 5,
	content: [
		label({
			text: "github.com/rolfhermancoen/OpenRCT2-NameGenerator",
			tooltip: "Go to this URL to check for the latest updates",
			alignment: "centred",
			disabled: true
		}),
		label({
			text: "version 0.1.1",
			alignment: "centred"
		})
	]
})
