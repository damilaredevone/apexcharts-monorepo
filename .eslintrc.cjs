module.exports = {
  extends: '@damilaredev/eslint-config-typescript',
  plugins: ['prettier'],
  rules: {
    'no-restricted-imports': [
      'error',
      {
        paths: ['path'],
      },
    ],
    'import/no-named-as-default': 'off',
    quotes: [
      0,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    'no-useless-constructor': 'warn',
    'space-before-function-paren': 'off',
    'no-console': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'import/named': 'off',
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.mts', '*.cts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/indent': 'off',
      },
    },
  ],
}
