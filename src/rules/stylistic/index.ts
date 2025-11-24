import type {UnprefixedRuleOptions} from '@stylistic/eslint-plugin';
import type {RulesWithTypedOptions} from '../../types';

import bracketRules from './bracket';
import delimiterRules from './delimiter';
import miscRules from './misc';
import newlineRules from './newline';
import spacingRules from './spacing';

const rules: Partial<RulesWithTypedOptions<UnprefixedRuleOptions>> = {
    ...bracketRules,
    ...delimiterRules,
    ...miscRules,
    ...newlineRules,
    ...spacingRules,
};

export default rules;
