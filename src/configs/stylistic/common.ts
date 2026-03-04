import type {UnprefixedRuleOptions} from '@stylistic/eslint-plugin';
import type {RulesWithTypedOptions} from '../../types';

const rules: Partial<RulesWithTypedOptions<UnprefixedRuleOptions>> = {
    // bracket
    'arrow-parens': ['error', 'as-needed', {requireForBlockBody: false}],
    'brace-style': ['error', '1tbs', {allowSingleLine: true}],
    'new-parens': ['error'],
    'no-confusing-arrow': ['error', {allowParens: true, onlyOneSimpleParam: true}],
    'no-extra-parens': ['off'],
    'wrap-iife': ['error', 'inside', {functionPrototypeMethods: true}],
    'wrap-regex': ['off'],

    // delimiter
    'comma-dangle': ['error', 'always-multiline'],
    'comma-style': ['error'],
    'dot-location': ['error', 'property'], //?
    'member-delimiter-style': [
        'error',
        {
            multiline: {
                delimiter: 'semi',
                requireLast: true,
            },
            singleline: {
                delimiter: 'semi',
                requireLast: false,
            },
            multilineDetection: 'brackets',
        },
    ],
    'no-extra-semi': ['error'],
    'semi': ['error', 'always', {omitLastInOneLineBlock: false, omitLastInOneLineClassBody: false}],
    'semi-style': ['error'],

    // spacing
    'array-bracket-spacing': ['error'],
    'arrow-spacing': ['error'],
    'block-spacing': ['error'],
    'comma-spacing': ['error'],
    'computed-property-spacing': ['error'],
    'function-call-spacing': ['error'],
    'generator-star-spacing': ['error', 'after'],
    'indent': ['error', 4, {
        SwitchCase: 1,
        flatTernaryExpressions: false,
        offsetTernaryExpressions: false,
    }],
    'indent-binary-ops': ['error', 4],
    'key-spacing': ['error'],
    'keyword-spacing': ['error'],
    'no-mixed-spaces-and-tabs': ['error'],
    'no-multi-spaces': ['error'],
    'no-tabs': ['error'],
    'no-trailing-spaces': ['error'],
    'no-whitespace-before-property': ['error'],
    'object-curly-spacing': ['error'],
    'rest-spread-spacing': ['error'],
    'semi-spacing': ['error'],
    'space-before-blocks': ['error'],
    'space-before-function-paren': ['error', {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
        catch: 'always',
    }],
    'space-in-parens': ['error'],
    'space-infix-ops': ['error'],
    'space-unary-ops': ['error', {words: true, nonwords: false}],
    'spaced-comment': ['off'],
    'switch-colon-spacing': ['error'],
    'template-curly-spacing': ['error'],
    'template-tag-spacing': ['error'],
    'type-annotation-spacing': ['error'],
    'type-generic-spacing': ['error'],
    'type-named-tuple-spacing': ['error'],
    'yield-star-spacing': ['error', 'after'],

    // newline
    'array-bracket-newline': ['error', 'consistent'],
    'array-element-newline': ['error', 'consistent'],
    'curly-newline': ['error', {consistent: true, multiline: false}],
    'eol-last': ['error'],
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': ['error', 'consistent'],
    'implicit-arrow-linebreak': ['error', 'beside'],
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

    // misc
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
