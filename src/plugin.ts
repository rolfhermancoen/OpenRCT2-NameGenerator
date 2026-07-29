/// <reference path="../lib/openrct2.d.ts" />

import { main } from "./main"

registerPlugin({
	name: "NameGenerator",
	version: __PLUGIN_VERSION__,
	authors: ["rolfhermancoen"],
	type: "remote",
	licence: "MIT",
	targetApiVersion: 70,
	main
})
