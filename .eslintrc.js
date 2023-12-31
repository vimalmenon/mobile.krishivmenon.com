module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: 8 }, // to enable features such as async/await
  ignorePatterns: [
    "node_modules/*",
    "!.prettierrc.js",
    "jest.setup.js",
  ], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  extends: ["eslint:recommended"],
  overrides: [
    // This configuration will apply only to TypeScript files
    {
      files: ["**/*.ts", "**/*.tsx", "**/*.js"],
      parser: "@typescript-eslint/parser",
      settings: { react: { version: "detect" } },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended", // TypeScript rules
        "plugin:react/recommended", // React rules
        "plugin:jsx-a11y/recommended", // Accessibility rules
        "plugin:prettier/recommended",
      ],
      plugins: ["simple-import-sort", "import"],
      rules: {
        // We will use TypeScript's types for component props instead
        "react/prop-types": "off",

        // No need to import React when using Next.js
        "react/react-in-jsx-scope": "off",

        // This rule is not compatible with Next.js's <Link /> components
        "jsx-a11y/anchor-is-valid": "off",
        "react-hooks/exhaustive-deps": "off",
        // Why would you want unused vars?
        "@typescript-eslint/no-unused-vars": ["error"],

        "prettier/prettier": ["error", {}, { usePrettierrc: true }],
        "jsx-a11y/no-onchange": 0,
        "no-console": ["error", { allow: ["warn", "error"] }],
        // I suggest this setting for requiring return types on functions only where useful
        "@typescript-eslint/explicit-function-return-type": [
          "warn",
          {
            allowExpressions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          },
        ],
        "import/order": [
          "error",
          {
            groups: ["builtin", "external", "internal"],
            pathGroups: [
              {
                pattern: "react",
                group: "external",
                position: "before",
              },
            ],
            pathGroupsExcludedImportTypes: ["react"],
            "newlines-between": "always",
            alphabetize: {
              order: "asc",
              caseInsensitive: true,
            },
          },
        ],
      },
    },
  ],
};
