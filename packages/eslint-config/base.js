const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: ['only-warn'],
  extends: ['prettier', 'eslint-config-turbo'],
  env: {
    node: true,
  },
  ignorePatterns: [
    // Ignore dotfiles
    '.*.js',
    'node_modules/',
    'dist/',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
};
