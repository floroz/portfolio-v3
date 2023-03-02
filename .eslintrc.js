/* eslint-disable unicorn/prefer-module */
/** eslint-env node */
module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    project: "./tsconfig.eslint.json",
    parser: "@typescript-eslint/parser",
    ecmaVersion: "latest",
    tsconfigRootDir: __dirname,
    sourceType: "module",
    extraFileExtensions: [".vue"],
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:vue/vue3-recommended",
    "plugin:unicorn/all",
    "plugin:prettier/recommended",
  ],
  plugins: ["vitest"],
  ignorePatterns: ["node_modules/**"],
  rules: {
    "prettier/prettier": "error",
    // vue3 not needed
    "vue/no-multiple-template-root": "off",
  },
  overrides: [
    {
      files: "pages/**/*.vue",
      rules: {
        "vue/multi-word-component-names": "off",
      },
    },
  ],
};
