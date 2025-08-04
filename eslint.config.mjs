import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js"

export default [
  {
    languageOptions: {
      globals: globals.node
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  // rules ここから -----------------------
  {
    rules: {
      "react/react-in-jsx-scope": 0,
      "comma-dangle": [2, "never"]
    }
  },
  // TypeScriptファイルに semi ルールを適用するための設定
  {
    files: ["**/*.{ts,tsx}"], // <- 対象となるファイルを明示
    rules: {
      "semi": [2, "never"]
    }
  }
  // rules ここまで -----------------------
]