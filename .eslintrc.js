// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-empty-object-type': 'off',
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
  },
};
