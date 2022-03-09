const setting = require("./.eslintrc.default.js");

// setting rules for frontend only.
setting.rules = {
  ...setting.rules,
  ...{
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
        format: ["camelCase", "UPPER_CASE", "PascalCase"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
      },
      {
        selector: ["parameter"],
        format: ["camelCase", "PascalCase"],
        leadingUnderscore: "allow",
        trailingUnderscore: "forbid",
      },
      {
        selector: ["function", "classProperty", "classMethod", "objectLiteralMethod", "typeMethod"],
        format: ["camelCase"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
      },
      {
        selector: ["objectLiteralProperty"],
        format: null,
        filter: {
          regex: "[&, >, *]",
          match: true,
        },
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
    "react/prop-types": 0,
    "react/no-unescaped-entities": 0,
    "@typescript-eslint/no-var-requires": 0,
  },
};

setting.parserOptions = {
  ecmaFeatures: {
    jsx: true, // Allows for the parsing of JSX
  },
};

setting.settings = {
  react: {
    version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
  },
};

module.exports = setting;
