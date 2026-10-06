// Fetch fullcalendar stuff from node_modules
import resolve from "@rollup/plugin-node-resolve";
// We maintain an in-tree fork of fullcalendar/icalendar
// in typescript.
import typescript from "@rollup/plugin-typescript";
// minify the bundle
import terser from '@rollup/plugin-terser';
import { readFileSync } from "node:fs";

export default {
  input: ["js/calendar-render.js", "js/digest.js", "js/feedback.js", "js/map.js", "js/subscribe.js"],
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
        module: "ESNext",
        moduleResolution: "bundler",
        strict: false,
        lib: ["es6"]
      },
    }),
    terser(),
    {
      name: "leaflet-css",
      generateBundle() {
        this.emitFile({ type: "asset", fileName: "leaflet.css", source: readFileSync("node_modules/leaflet/dist/leaflet.css") });
      }
    }
  ],
};