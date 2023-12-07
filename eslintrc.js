module.exports = {
  // ... other ESLint configurations ...

  plugins: ['import'],

  rules: {
    // ... other ESLint rules ...

    'import/no-cycle': ['error', { maxDepth: Infinity }],
  },
};
