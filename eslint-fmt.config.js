import stylistic from "@stylistic/eslint-plugin";
import arcaEslint from "eslint-plugin-arca";
import * as eslintImport from "eslint-plugin-import";
import tseslint from "typescript-eslint";

export default [
  tseslint.configs.base,
  tseslint.configs.eslintRecommended,
  stylistic.configs["recommended-flat"],
  {
    plugins: {
      "@stylistic": stylistic,
      arca: arcaEslint,
      import: eslintImport,
    },
    rules: {
      "@stylistic/multiline-ternary": ["off"],
      "@stylistic/indent": ["error", 2],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/key-spacing": [
        "error",
        { beforeColon: false, afterColon: true, align: "value" },
      ],
      "@stylistic/quote-props": ["error", "as-needed"],
      "@stylistic/member-delimiter-style": [
        "error",
        {
          multiline: { delimiter: "semi", requireLast: true },
          singleline: { delimiter: "semi", requireLast: false },
          multilineDetection: "brackets",
        },
      ],
      "@stylistic/no-multi-spaces": [
        "error",
        {
          exceptions: {
            // https://github.com/eslint-stylistic/eslint-stylistic/issues/245
            TSTypeAnnotation: true,
            ImportDeclaration: true,
          },
        },
      ],

      "arca/import-align": ["error", { collapseExtraSpaces: true }],
      "import/order": [
        "error",
        {
          "newlines-between": "always",
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
    },
  },
  {
    ignores: ["**/node_modules/", "**/dist/"],
  },
];
