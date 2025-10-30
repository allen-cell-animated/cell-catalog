import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import sortDestructureKeys from "eslint-plugin-sort-destructure-keys";
import { defineConfig } from "eslint/config";

export default defineConfig([
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        plugins: {
            js,
            tseslint,
        },
        extends: [
            "eslint:recommended",
            "plugin:@typescript-eslint/recommended",
        ],
        languageOptions: { globals: { ...globals.browser, ...globals.node } },
        rules: {
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": ["error"],
            "sort-destructure-keys/sort-destructure-keys": [
                2,
                { caseSensitive: false },
            ],
            "@typescript-eslint/no-require-imports": [
                0,
                { allowAsImport: true },
            ],
        },
    },
]);
