const path = require("path");
const package = require("../package.json");
require("dotenv").config();

const packageAssetsPath = path.join(__dirname, "..", "assets", "package");


module.exports = {
	packagerConfig: {
		asar: true,
	},
	makers: [
		// https://www.electronforge.io/config/makers
		{
			name: "@electron-forge/maker-squirrel",
			config: {
				// https://js.electronforge.io/maker/squirrel/interfaces/makersquirrelconfig
				setupExe: "Windows Setup.exe",
				iconUrl: "app.ico",
				setupIcon: path.join(packageAssetsPath, "icons", "win", "app.ico"),
				authors: "Gustavo Nascimento"
			},
		},
		{
			name: "@electron-forge/maker-dmg",
			config: {
				icon: path.join(packageAssetsPath, "icons", "mac", "icon.icns"),
				background: path.join(packageAssetsPath, "source.png"),
				overwrite: true,
				name: "Icon-Manager",
			},
		},
		{
			name: "@electron-forge/maker-deb",
			config: {
				icon: path.join(packageAssetsPath, "icons", "png", "1024x1024.png"),
			},
		},
	],
	plugins: [
		[
			"@electron-forge/plugin-webpack",
			{
				mainConfig: "./.config/webpack.main.config.js",
				renderer: {
					config: "./.config/webpack.renderer.config.js",
					entryPoints: [{
						html: "./src/render/index.html",
						js: "./src/renderer.tsx",
						name: "main_window",
						preload: {
							js: "./src/preload.ts",
						},
					}, ],
				},
			},
		],
	],
};