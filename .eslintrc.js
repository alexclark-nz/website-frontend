module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-unused-components': 1,
    'no-unused-vars': 1,
    'max-len': 0,
    'no-tabs': 0,
    semi: 0,
    'comma-dangle': 0,
    radix: 0,
    'arrow-parens': 0,
    'prefer-destructuring': 0,
    'object-curly-newline': 0,
    'prefer-template': 0,
    'no-param-reassign': 0,
    indent: 0,
    'no-return-assign': 0,
    'consistent-return': 0,
    'import/prefer-default-export': 0,
    'css-semicolonexpected': 0,
  },
};
