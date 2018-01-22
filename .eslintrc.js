module.exports = {
  parser: 'babel-eslint',
  "extends": ["standard"],
  plugins: ['react'],
  rules: {
    'strict': 0,
    'react/jsx-uses-vars': 'error',
    'react/jsx-uses-react': 'error'
  }
};