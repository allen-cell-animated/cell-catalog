import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        files: ["**/*.{ts,tsx}"],
        plugins: {
            js,
            "sort-destructure-keys": require("eslint-plugin-sort-destructure-keys"),
        },
        extends: ["js/recommended"],
        languageOptions: { globals: { ...globals.browser, ...globals.node } },
        rules: {
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
