import type {Linter} from 'eslint';
import type tseslint from '@typescript-eslint/eslint-plugin/dist';

type Rules = typeof tseslint.rules;

export type RuleRecord = Partial<{
    [RuleName in keyof Rules]: Linter.RuleEntry<Rules[RuleName]['defaultOptions']>
}>;
