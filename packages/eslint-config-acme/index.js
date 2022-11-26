module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["turbo", "@antfu"],
  rules: {
    "quotes": ["error", "double"],
    "@typescript-eslint/quotes": ["error", "double"],
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
  },
}
