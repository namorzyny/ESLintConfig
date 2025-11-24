import {defineConfig} from 'eslint/config';
import {configs} from './src';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default defineConfig([
    {
        ignores: ['dist/**', 'node_modules/**'],
    },
    eslint.configs.recommended,
    tseslint.configs.strictTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                projectService: {
                    allowDefaultProject: ['*.js'],
                },
            },
        },
        rules: {
            '@typescript-eslint/no-unnecessary-type-assertion': 'off',
            '@typescript-eslint/no-unused-vars': ['error', {varsIgnorePattern: '^[A-Z]'}],
        },
    },
    configs.all,
]);
