  module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: ["react-app", "airbnb", "plugin:prettier/recommended"],
    overrides: [],
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: ["react", "prettier"],
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "consistent-return": "error",
      indent: ["warn", 2],
    },
  };
