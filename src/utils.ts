import type {Linter} from 'eslint';
import type {MapperFunction} from './types';

export function addPrefix(prefix: TemplateStringsArray): MapperFunction<Partial<Linter.RulesRecord>> {
    return rules => {
        const output: Partial<Linter.RulesRecord> = {};
        for (const rule in rules) {
            output[`${String(prefix)}/${rule}`] = rules[rule];
        }
        return output;
    };
}
