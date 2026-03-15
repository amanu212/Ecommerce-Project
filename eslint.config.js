import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";

export default [
  { 
    files: ["**/*.{js,mjs,cjs,jsx}"],
    ...js.configs.recommended,
    languageOptions: { globals: globals.browser }
  },
  ...pluginReact.configs.flat.recommended,
  {
    rules: {
      "react/prop-types": "off"
    }
  }
];