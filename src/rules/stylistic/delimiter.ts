import type {UnprefixedRuleOptions} from '@stylistic/eslint-plugin';
import type {RulesWithTypedOptions} from '../../types';

const rules: Partial<RulesWithTypedOptions<UnprefixedRuleOptions>> = {
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
};

export default rules;
