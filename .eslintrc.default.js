module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "prettier",
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  // Fine tune rules
  rules: {
    "prefer-const": 0,
    "no-useless-catch": 0,
    "no-useless-escape": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "default-case": 1,
    "require-yield": 1,
    "no-new-wrappers": 1,
    "@typescript-eslint/ban-types": 1,
    "@typescript-eslint/no-var-requires": 1,

    // https://github.com/typescript-eslint/typescript-eslint/blob/02c6ff3c5a558f9308d7166d524156dc12e32759/packages/eslint-plugin/docs/rules/naming-convention.md
    "@typescript-eslint/naming-convention": [
      1,
      {
        selector: "default",
        format: null,
        custom: {
          regex: "[\\w]+",
          match: true,
        },
      },
      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
      },
      {
        selector: ["function", "parameter"],
        format: ["camelCase"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
      },
      {
        selector: ["classProperty"],
        format: ["camelCase"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
      },
      {
        selector: ["classMethod"],
        format: ["camelCase"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
      },
      {
        selector: ["objectLiteralMethod", "typeMethod"],
        format: ["camelCase"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
      },
      {
        selector: "typeLike",
        format: ["PascalCase", "UPPER_CASE"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
      }, // Applied to class, interface, typeAlias, enum, typeParameter
    ],
  },
  ignorePatterns: ["dist/", "node_modules/"],
};
