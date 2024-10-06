/* eslint-env node */
import '@rushstack/eslint-patch/modern-module-resolution'
export default {
  env: {
    browser: true,
    node: true
  },
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  rules: {
    'vue/multi-word-component-names': 0,
    semi: ['error', 'always']
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
