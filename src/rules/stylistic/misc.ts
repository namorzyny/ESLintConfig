import type {UnprefixedRuleOptions} from '@stylistic/eslint-plugin';
import type {RulesWithTypedOptions} from '../../types';

const rules: Partial<RulesWithTypedOptions<UnprefixedRuleOptions>> = {
    'jsx-pascal-case': ['error', {allowAllCaps: true, allowNamespace: true}],
    'jsx-quotes': ['error', 'prefer-single'],
    'jsx-self-closing-comp': ['error', {component: true, html: true}],
    'jsx-sort-props': ['error', {
        callbacksLast: true,
        shorthandFirst: true,
        noSortAlphabetically: true,
        reservedFirst: true,
    }],
    'multiline-comment-style': ['off'],
    'no-floating-decimal': ['error'],
    'no-mixed-operators': ['error'],
    'operator-linebreak': ['error', 'before'],
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': [
        'error',
        'single',
        {
            avoidEscape: true,
            allowTemplateLiterals: 'avoidEscape',
            ignoreStringLiterals: false,
        },
    ],
};

export default rules;
