import type {Linter} from 'eslint';
import type rules from '@typescript-eslint/eslint-plugin/use-at-your-own-risk/rules';

type Rules = typeof rules;

export type RuleRecord = Partial<{
    [RuleName in keyof Rules]: Linter.RuleEntry<Rules[RuleName]['defaultOptions']>
}>;
