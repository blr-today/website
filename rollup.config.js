// Fetch fullcalendar stuff from node_modules
import resolve from "@rollup/plugin-node-resolve";
// We maintain an in-tree fork of fullcalendar/icalendar
// in typescript.
import typescript from "@rollup/plugin-typescript";
// minify the bundle
import terser from '@rollup/plugin-terser';

export default {
  input: "js/calendar-render.js",
  output: {
    dir: "assets/js",
    format: "es",
    preserveModules: true,
    preserveModulesRoot: "js"
  },
  plugins: [
    resolve({
      moduleDirectories: ["node_modules"]
    }),
    typescript({
      compilerOptions: {
        paths: {
          "@fullcalendar/icalendar": ["./js/@fullcalendar/icalendar/src"],
        },
        target: "ES6",
        lib: ["es6"]
      },
    }),
    terser()
  ],
};