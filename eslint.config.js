import typescriptEslint from "@typescript-eslint/eslint-plugin"
import globals from "globals"
import tsParser from "@typescript-eslint/parser"
import path from "node:path"
import { fileURLToPath } from "node:url"
import js from "@eslint/js"
import { FlatCompat } from "@eslint/eslintrc"
import eslintPluginPrettier from "eslint-plugin-prettier"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all
})

export default [
	{
		ignores: [
			"**/lib/",
			"**/dist/",
			"**/node_modules/",
			"**/rollup.config.js",
			"**/*.cjs"
		]
	},
	...compat.extends(
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier"
	),
	{
		plugins: {
			"@typescript-eslint": typescriptEslint,
			prettier: eslintPluginPrettier
		},

		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				Atomics: "readonly",
				SharedArrayBuffer: "readonly"
			},

			parser: tsParser,
			ecmaVersion: 11,
			sourceType: "module"
		},

		settings: {
			"import/resolver": {
				node: {
					extensions: [".js", ".ts"]
				}
			}
		},

		rules: {
			"no-unused-vars": "off",
			semi: ["error", "never"],
			"@typescript-eslint/no-inferrable-types": "off",
			"@typescript-eslint/semi": ["error", "never"],
			"@typescript-eslint/triple-slash-reference": "off",
			"max-len": ["error", { code: 100, tabWidth: 4 }],
			"constructor-super": 0,
			"prettier/prettier": 2
		},
		files: ["**/*.ts", "**/*.js"]
	}
]
