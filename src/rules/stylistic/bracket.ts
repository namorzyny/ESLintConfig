import type {UnprefixedRuleOptions} from '@stylistic/eslint-plugin';
import type {RulesWithTypedOptions} from '../../types';

const rules: Partial<RulesWithTypedOptions<UnprefixedRuleOptions>> = {
    'arrow-parens': ['error', 'as-needed', {requireForBlockBody: false}],
    'brace-style': ['error', '1tbs', {allowSingleLine: true}],
    'jsx-curly-brace-presence': ['error', 'never'],
    'jsx-wrap-multilines': ['off'],
    'new-parens': ['error'],
    'no-confusing-arrow': ['error', {allowParens: true, onlyOneSimpleParam: true}],
    'no-extra-parens': ['off'],
    'wrap-iife': ['error', 'inside', {functionPrototypeMethods: true}],
    'wrap-regex': ['off'],
};

export default rules;
