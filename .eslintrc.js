export default {
  'env': {
    'browser': true,
    'es2021': true
  },
  "globals": {
    "JSX": true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'overrides': [],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint'
  ],
  'rules': {
    'indent': [
      'error',
      4
    ],
    'linebreak-style': [
      'error',
      'windows'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    "no-multiple-empty-lines": ["warn", { "max": 1 }],
    "no-void": 0,
    "camelcase": 0,
    "class-methods-use-this": 0,
    "consistent-return": 0,
    "dot-notation": 0,
    "import/extensions": 0,
    "import/no-extraneous-dependencies": [2, { "devDependencies": true }],
    "import/no-unresolved": 0,
    "import/prefer-default-export": 0,
    "import/order": ["warn", {
      "alphabetize": { "order": "asc", "caseInsensitive": false },
      "groups": [ "builtin", "external", "internal", "parent", "sibling", "index" ],
      "newlines-between": "always",
      "pathGroupsExcludedImportTypes": [
        "builtin"
      ]
    }],
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "no-async-promise-executor": 0,
    "no-nested-ternary": 0,
    "no-param-reassign": 0,
    "no-plusplus": [2, { "allowForLoopAfterthoughts": true }],
    "no-underscore-dangle": 0,
    "no-unused-vars": 0,
    "prefer-destructuring": 0,
    "react/destructuring-assignment": 0,
    "react-hooks/rules-of-hooks": 2,
    "react/jsx-filename-extension": [2, { "extensions": [".tsx"] }],
    "react/jsx-fragments": 0,
    "react/jsx-props-no-spreading": 0,
    "react/no-array-index-key": 0,
    "react/prefer-stateless-function": 0,
    "react/sort-comp": 0,
    "react/static-property-placement": 0,
    "react/state-in-constructor": 0,
    "react/require-default-props": 0,
    "react/jsx-no-bind": 0,
    "react/default-props-match-prop-types": 0,
    "react/function-component-definition": [2, {
      "namedComponents": "function-declaration",
      "unnamedComponents": "arrow-function"
    }],
    "default-param-last": 0,
    "no-undef": 0,
    "no-promise-executor-return": 0,
    "react/react-in-jsx-scope": 0,
    // todo from typescript  plugin
    "no-use-before-define": [0, { "functions": false }],

    // todo полезное, постепенно вернуть
    "react/prop-types": 0,
    "react/jsx-no-useless-fragment": 0,
    "no-restricted-exports": 0,
    "react-hooks/exhaustive-deps": 0,
    "react/no-unused-prop-types": 0,
  }
}
  