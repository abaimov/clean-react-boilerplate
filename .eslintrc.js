module.exports = {
  extends: ['airbnb', 'plugin:jest/recommended'],
  plugins: ['jest'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off'
  },
  'env': {
    'jest/globals': true
  }
};
