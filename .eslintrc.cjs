module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "prettier",
    ],
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: ["react", "prettier"],
    rules: {
      "prettier/prettier": ["error"],
      "react/prop-types": "off",
    },
  };
  