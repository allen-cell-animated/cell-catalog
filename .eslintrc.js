module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    plugins: ["@typescript-eslint", "react", "react-hooks", "unused-imports"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "prettier",
    ],
    rules: {
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["warn"],
        "unused-imports/no-unused-imports": "error",
        "@typescript-eslint/no-floating-promises": "warn",
        "no-extra-boolean-cast": "warn",
        "react/prop-types": "off",

        // Currently this repo uses "any" and is generally loose
        // on typing, so turning off some rules that might be
        // best practice in the long run.
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "off",

        // Added css module declartion if we want to move away
        // from using require when importing css class names
        // but turning this off for now
        "@typescript-eslint/no-require-imports": "off",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    ignorePatterns: ["node_modules/", "public/", ".cache/"],
    // TODO: opted to override linting for the preview templates
    // as its too much to handle during the initial migration
    // They are typed very generally and loosely
    overrides: [
        {
            files: ["src/cms/preview-templates/**/*.tsx"],
            rules: {
                "@typescript-eslint/no-unsafe-call": "off",
                "@typescript-eslint/no-unsafe-member-access": "off",
                "@typescript-eslint/no-unsafe-assignment": "off",
                "@typescript-eslint/no-unsafe-return": "off",
                "@typescript-eslint/no-explicit-any": "off",
            },
        },
    ],
};
