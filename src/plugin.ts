/// <reference path="../lib/openrct2.d.ts" />

import { main } from "./main"

registerPlugin({
	name: "NameGenerator",
	version: "0.1",
	authors: ["rolfhermancoen"],
	type: "remote",
	licence: "MIT",
	targetApiVersion: 70,
	main
})
