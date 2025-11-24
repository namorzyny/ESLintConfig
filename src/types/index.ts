import type {Linter} from 'eslint';

export type RulesWithTypedOptions<RulesOptions extends Record<keyof RulesOptions, unknown[]>> = {
    [RuleName in keyof RulesOptions]: [Linter.RuleSeverity, ...RulesOptions[RuleName]];
};

export type RulesWithoutTypedOptions<RulesDefinition extends Record<string, unknown>> = Partial<
    Record<keyof RulesDefinition, Linter.RuleEntry>
>;

export type MapperFunction<T> = (value: T) => T;
