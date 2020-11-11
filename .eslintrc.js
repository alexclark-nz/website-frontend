module.exports = {
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  extends: [
    '@nuxtjs'
  ],
  rules: {
    'no-console': 0,
    'no-debugger': 1,
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
    'vue/require-default-prop': 0,
    'space-before-function-paren': 0,
    'eol-last': 0,
    'vue/html-indent': 0,
    'scss(css-semicolonexpected)': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/no-v-html': 0,
    'vue/prop-name-casing': 0,
    'vue/order-in-components': 0,
    'vue/attribute-hyphenation': 0,

  }
}
