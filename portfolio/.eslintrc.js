// module.exports = {
//   root: true,
//   parserOptions: {
//     parser: "babel-eslint"
//   },
//   env: {
//     browser: true
//   },
//   extends: [
//     // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
//     // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
//     "plugin:vue/essential",
//     // https://github.com/standard/standard/blob/master/docs/RULES-en.md
//     "standard"
//   ],
//   // required to lint *.vue files
//   plugins: ["vue"],
//   // add your custom rules here
//   rules: {
//     // allow async-await
//     "generator-star-spacing": "off",
//     semi: 0,
//     // allow debugger during development
//     "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
//   }
// };


module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: [
    "plugin:vue/strongly-recommended"

    // "plugin:prettier/recommended",
    // "prettier",
    // "prettier/vue"
  ],
  plugins: ["vue"],
  // add your custom rules here
  rules: {
    indent: "off",
    "no-tabs": 0,
    "vue/html-closing-bracket-spacing": [
      "warn",
      {
        startTag: "never",
        endTag: "never",
        selfClosingTag: "always"
      }
    ],
    "no-mixed-spaces-and-tabs": "off",
    "vue/attributes-order": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/max-attributes-per-line": "off",
    semi: ["error", "always"],
    "no-console": "warn",
    "no-unused-vars": "off",
    "space-before-function-paren": [
      "error",
      { anonymous: "never", named: "never", asyncArrow: "always" }
    ],
    "keyword-spacing": ["error", { overrides: { this: { before: false } } }]
  }
};

