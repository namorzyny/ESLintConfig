import type {UnprefixedRuleOptions} from '@stylistic/eslint-plugin';
import type {RulesWithTypedOptions} from '../../types';

const rules: Partial<RulesWithTypedOptions<UnprefixedRuleOptions>> = {
    'array-bracket-newline': ['error', 'consistent'],
    'array-element-newline': ['error', 'consistent'],
    'curly-newline': ['error', {consistent: true, multiline: false}],
    'eol-last': ['error'],
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': ['error', 'consistent'],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'jsx-closing-bracket-location': ['error', 'line-aligned'],
    'jsx-curly-newline': ['error'],
    'jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'jsx-function-call-newline': ['error', 'multiline'],
    'jsx-max-props-per-line': ['error', {maximum: 1, when: 'multiline'}],
    'jsx-newline': ['error', {prevent: true, allowMultilines: true}],
    'jsx-one-expression-per-line': ['error', {allow: 'single-line'}],
    'line-comment-position': ['off'],
    'linebreak-style': ['error'],
    'lines-around-comment': ['off'],
    'lines-between-class-members': [
        'error',
        {
            enforce: [
                {blankLine: 'always', prev: '*', next: 'method'},
                {blankLine: 'always', prev: 'method', next: '*'},
                {blankLine: 'never', prev: 'field', next: 'field'},
            ],
        },
        {
            exceptAfterSingleLine: true,
            exceptAfterOverload: true,
        },
    ],
    'max-len': ['off'],
    'max-statements-per-line': ['off'],
    'multiline-ternary': ['error', 'never'],
    'newline-per-chained-call': ['off'],
    'no-multiple-empty-lines': ['error'],
    'nonblock-statement-body-position': ['error'],
    'object-curly-newline': ['error', {consistent: true, multiline: false}],
    'object-property-newline': ['error', {allowAllPropertiesOnSameLine: true}],
    'one-var-declaration-per-line': ['error', 'initializations'],
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': ['off'],
};

export default rules;
