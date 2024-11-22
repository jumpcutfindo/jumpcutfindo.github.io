/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
module.exports = {
  trailingComma: "all",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  arrowParens: "always",
  bracketSpacing: true,

  // Add plugins
  plugins: ["@ianvs/prettier-plugin-sort-imports"],

  // prettier-plugin-sort-imports
  importOrder: [
    "<BUILTIN_MODULES>",
    "",
    "^react$",
    "",
    "^next.*$",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^[.]",
  ],
};
