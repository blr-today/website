// Fetch fullcalendar stuff from node_modules
import resolve from "@rollup/plugin-node-resolve";
// Use ical.js properly, since 1.5.0 is a CJS package
import commonjs from "@rollup/plugin-commonjs";
// We maintain an in-tree fork of fullcalendar/icalendar
// in typescript.
import typescript from "@rollup/plugin-typescript";
// minify the bundle
import terser from '@rollup/plugin-terser';

export default {
  input: "js/calendar-render.js",
  output: {
    file: "assets/bundle.js",
    format: "es",
  },
  plugins: [
    commonjs(),
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