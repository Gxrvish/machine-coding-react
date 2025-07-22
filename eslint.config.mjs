import { FlatCompat } from "@eslint/eslintrc";
import prettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import eslintPluginUnusedImports from "eslint-plugin-unused-imports";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),

    {
        plugins: {
            prettier: pluginPrettier,
            "unused-imports": eslintPluginUnusedImports,
            "simple-import-sort": simpleImportSort,
        },
        rules: {
            // Double quotes
            quotes: ["error", "double"],

            // 4-space indent
            indent: ["error", 4],

            // No trailing spaces
            "no-trailing-spaces": "error",

            // Remove unused variables
            "no-unused-vars": ["off"], // Turned off in favor of the plugin
            "unused-imports/no-unused-vars": [
                "error",
                {
                    vars: "all",
                    varsIgnorePattern: "^_",
                    args: "after-used",
                    argsIgnorePattern: "^_",
                },
            ],

            // Remove unused imports
            "unused-imports/no-unused-imports": "error",

            // Sort and group imports
            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error",

            // Prettier formatting
            "prettier/prettier": [
                "error",
                {
                    singleQuote: false,
                    tabWidth: 4,
                    useTabs: false,
                },
            ],

            // General good practices
            eqeqeq: ["error", "always"],
            curly: "error",
            "no-console": ["warn", { allow: ["warn", "error"] }],
            "no-debugger": "error",
            "prefer-const": "error",
            "no-var": "error",
        },
    },

    prettier,
];

export default eslintConfig;
