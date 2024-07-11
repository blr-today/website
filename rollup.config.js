import resolve from "@rollup/plugin-node-resolve"
import commonjs from '@rollup/plugin-commonjs';

export default {
	input: 'js/calendar-render.js',
	output: {
		file: 'assets/bundle.js',
		format: 'es'
	},
	plugins: [
		commonjs(),
		resolve({
			// pass custom options to the resolve plugin
			moduleDirectories: ['node_modules']
		})
	],
};