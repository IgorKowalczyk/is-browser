import rollupPluginNodeResolve from "@rollup/plugin-node-resolve";
import rollupPluginTypescript from "@rollup/plugin-typescript";
import { RollupOptions } from "rollup";

export default {
 input: "src/index.ts",
 external: ["tailwindcss/plugin"],
 plugins: [
  rollupPluginNodeResolve(),
  rollupPluginTypescript({
   tsconfig: "tsconfig.json",
   include: ["src/index.ts"],
   declaration: true,
   outDir: "dist",
  }),
 ],
 treeshake: {
  annotations: true,
  moduleSideEffects: [],
  propertyReadSideEffects: false,
  unknownGlobalSideEffects: false,
 },
 output: [
  {
   file: "dist/index.js",
   format: "esm",
   compact: true,
  },
  {
   file: "dist/index.cjs",
   format: "cjs",
   compact: true,
  },
 ],
} satisfies RollupOptions;
