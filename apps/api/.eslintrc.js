/** @type {import("eslint").Linter.Config} */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  extends: ['@repo/eslint-config/nest.js'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
};
