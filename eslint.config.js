import stylistic from "@stylistic/eslint-plugin";
import globals from "globals";
import tseslint from "typescript-eslint";

import fmtConfigs from "./eslint-fmt.config.js";

export default [
  ...tseslint.config(
    ...tseslint.configs.recommended,
    stylistic.configs["disable-legacy"],
    {
      plugins: {
        // @ts-expect-error - `@stylistic`
        "@stylistic": stylistic,
      },
      languageOptions: {
        parserOptions: {
          ecmaVersion: 2022,
          sourceType: "module",
          projectService: true,
          tsconfigRootDir: import.meta.dirname,
        },
        globals: {
          ...globals.browser,
        },
      },
      rules: {
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-explicit-any": "error",
      },
    }
  ),
  ...fmtConfigs,
  {
    ignores: ["**/node_modules/", "**/dist/"],
  },
];
