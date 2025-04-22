import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import prettierPlugin from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    plugins: {
      prettier: prettierPlugin,
      js: js,
    },
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      "prettier/prettier": "error",
    },
    extends: ["js/recommended"],
  },
  tseslint.configs.recommended,
]);
