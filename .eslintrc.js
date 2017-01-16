module.exports = {
  env: {
    browser: true,
    es6: true
  },
  root: true,
  extends: 'standard',
  plugins: [
    'html',
    'promise'
  ],
  'rules': {
    'arrow-parens': 0,
    'no-undef': 0,
    'no-new': 0,
    'no-unused-vars': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
