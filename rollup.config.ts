import type { RollupOptions } from "rollup";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";

const config: RollupOptions = {
  input: "src/index.js",
  output: {
    file: "lib/index.js",
    format: "cjs"
  },
  plugins: [
    commonjs(),
    babel({
      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              browsers: ["last 2 versions"],
              node: "current"
            }
          }
        ]
      ]
    })
  ]
};

export default config;