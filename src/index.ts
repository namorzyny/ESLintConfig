import type {Linter} from 'eslint';
import stylistic from '@stylistic/eslint-plugin';
import rules from './rules';

export const configs: Record<keyof typeof rules | 'all', Linter.Config> = {
    stylistic: {
        plugins: {'@stylistic': stylistic},
        rules: rules.stylistic,
    },
    all: {},
};

const allConfigs: Linter.Config = Object.values(configs).reduce((previousValue, currentValue) => {
    previousValue.plugins = {...(previousValue.plugins ?? {}), ...(currentValue.plugins ?? {})};
    previousValue.rules = {...(previousValue.rules ?? {}), ...(currentValue.rules ?? {})};
    return previousValue;
}, {});
configs.all = allConfigs;

export {rules};
