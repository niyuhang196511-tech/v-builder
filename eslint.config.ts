import js from '@eslint/js'
import globals from 'globals'
import tsEslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import prettierPlugin from 'eslint-plugin-prettier'
import { defineConfig } from 'eslint/config'

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
        plugins: { js, prettier: prettierPlugin },
        extends: ['js/recommended'],
        languageOptions: { globals: { ...globals.browser, ...globals.node } },
        rules: {
            // ⚙️ 开启 Prettier 格式校验
            'prettier/prettier': 'error',
            '@typescript-eslint/no-explicit-any': 'off',
        },
    },
    tsEslint.configs.recommended,
    pluginVue.configs['flat/essential'],
    {
        files: ['**/*.vue'],
        languageOptions: { parserOptions: { parser: tsEslint.parser } },
        rules: {
            'vue/multi-word-component-names': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
        },
    },
])
