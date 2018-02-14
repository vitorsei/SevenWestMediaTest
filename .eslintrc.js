module.exports = {
  parser: 'typescript-eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: { jsx: true }
  },
  plugins: [
    // 'react' // has issues with typescript-eslint-parser
  ],
  extends: [
    'pureprofile',
    // 'plugin:react/recommended' // has issues with typescript-eslint-parser
  ],
  env: {
    es6: true,
    browser: true,
    node: true
  },
  rules: {
    'camelcase': 0, // we always prefer camelcase but some services don't use it
    'class-methods-use-this': 0, // doesn't work well with react classes
    'no-undef': 0, // doesn't work with typescript
    'no-unused-vars': 0, // doesn't work with typescript
    'no-useless-constructor': 0, // doesn't work with typescript
    'space-infix-ops': 0 // doesn't work with typescript
  }
};
