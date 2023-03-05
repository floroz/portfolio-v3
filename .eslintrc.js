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
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:vue/vue3-recommended",
    "plugin:tailwindcss/recommended",
    "@nuxtjs/eslint-config-typescript",
    "plugin:unicorn/all",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint", "vitest"],
  ignorePatterns: ["node_modules/**"],
  rules: {
    "@typescript-eslint/no-floating-promises": "off",
    "prettier/prettier": "error",
    "vue/no-multiple-template-root": "off",
    "unicorn/no-null": "off",
    "unicorn/no-keyword-prefix": "off",
    "unicorn/prevent-abbreviations": [
      "error",
      {
        allowList: {
          props: true,
          Props: true,
          attrs: true,
        },
      },
    ],
  },
  overrides: [
    {
      files: "*.vue",
      rules: {
        "vue/multi-word-component-names": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
      },
    },
  ],
};
