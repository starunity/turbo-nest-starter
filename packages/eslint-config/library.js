const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['eslint:recommended', require.resolve('./base')],
  env: {
    node: true,
  },

  overrides: [
    {
      files: ['*.js?(x)', '*.ts?(x)'],
    },
  ],
};
