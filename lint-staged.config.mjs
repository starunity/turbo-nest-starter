import path from 'path';

/** @type {import("lint-staged").Config} */
export default {
  '**/*': (files) => {
    // 过滤符号链接文件
    const ignored = files.filter((file) => path.basename(file) !== '.env');

    return `prettier --write --ignore-unknown ${ignored.join(' ')}`;
  },
  '**/*.{js,jsx,ts,tsx}': 'eslint --fix',
};
