import type {UnprefixedRuleOptions} from '@stylistic/eslint-plugin';
import type {RulesWithTypedOptions} from '../../types';

const rules: Partial<RulesWithTypedOptions<UnprefixedRuleOptions>> = {
    // bracket
    'jsx-curly-brace-presence': ['error', 'never'],
    'jsx-wrap-multilines': ['off'],

    // misc
    'jsx-pascal-case': ['error', {allowAllCaps: true, allowNamespace: true}],
    'jsx-quotes': ['error', 'prefer-single'],
    'jsx-self-closing-comp': ['error', {component: true, html: true}],
    'jsx-sort-props': ['error', {
        callbacksLast: true,
        shorthandFirst: true,
        noSortAlphabetically: true,
        reservedFirst: true,
    }],

    // newline
    'jsx-closing-bracket-location': ['error', 'line-aligned'],
    'jsx-curly-newline': ['error'],
    'jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'jsx-function-call-newline': ['error', 'multiline'],
    'jsx-max-props-per-line': ['error', {maximum: 1, when: 'multiline'}],
    'jsx-newline': ['error', {prevent: true, allowMultilines: true}],
    'jsx-one-expression-per-line': ['error', {allow: 'single-line'}],

    // spacing
    'jsx-child-element-spacing': ['error'],
    'jsx-closing-tag-location': ['error', 'line-aligned'],
    'jsx-curly-spacing': ['error', 'never'],
    'jsx-equals-spacing': ['error'],
    'jsx-indent-props': ['error', {indentMode: 4, ignoreTernaryOperator: true}],
    'jsx-tag-spacing': ['error', {
        closingSlash: 'never',
        beforeSelfClosing: 'proportional-always',
        afterOpening: 'never',
        beforeClosing: 'proportional-always',
    }],
};

export default rules;
