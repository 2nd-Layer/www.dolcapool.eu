module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
  ],
  // required to lint *.vue files
  plugins: ["vue"],
  // add your custom rules here
  rules: {
    semi: [2, "never"],
    "linebreak-style": ["error", "unix"],
    "no-console": "off",
    "vue/max-attributes-per-line": "off",
    "vue/html-self-closing": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/require-prop-types": "off",
    "prettier/prettier": ["error", { semi: false }],
  },
}