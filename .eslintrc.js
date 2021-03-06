module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/typescript'],
  plugins: ['vue'],
  rules: {},
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021
  }
}
