/** @type {import('stylelint').Config} */
export default {
    ignoreFiles: ['**/*.html', '**/node_modules/**'],

    defaultSeverity: 'error',

    rules: {
        // 只保留核心的样式质量规则，完全避免格式化规则
        'at-rule-no-unknown': true,
        'block-no-empty': true,
        'color-no-invalid-hex': true,
        'declaration-block-no-duplicate-properties': true,
        'declaration-block-no-shorthand-property-overrides': true,
        'font-family-no-duplicate-names': true,
        'function-calc-no-unspaced-operator': true,
        'keyframe-declaration-no-important': true,
        'media-feature-name-no-unknown': true,
        'no-duplicate-at-import-rules': true,
        'no-duplicate-selectors': true,
        'no-empty-source': true,
        'property-no-unknown': true,
        'selector-pseudo-class-no-unknown': true,
        'selector-pseudo-element-no-unknown': true,
        'selector-type-no-unknown': true,
        'string-no-newline': true,
        'unit-no-unknown': true,
    },

    overrides: [
        {
            files: ['*.scss', '**/*.scss'],
            customSyntax: 'postcss-scss',
            rules: {
                // 允许 SCSS 特有的 @规则
                'at-rule-no-unknown': [
                    true,
                    {
                        ignoreAtRules: [
                            'use',
                            'forward',
                            'import',
                            'mixin',
                            'include',
                            'function',
                            'return',
                            'extend',
                            'at-root',
                            'warn',
                            'error',
                            'if',
                            'else',
                            'for',
                            'each',
                            'while',
                        ],
                    },
                ],
            },
        },
        {
            files: ['*.vue', '**/*.vue'],
            customSyntax: 'postcss-html',
            rules: {
                // Vue 特定规则 - 允许 Vue 的深度选择器
                'selector-pseudo-element-no-unknown': [
                    true,
                    {
                        ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'],
                    },
                ],
                'selector-pseudo-class-no-unknown': [
                    true,
                    {
                        ignorePseudoClasses: ['deep', 'global', 'slotted'],
                    },
                ],
            },
        },
    ],
}
