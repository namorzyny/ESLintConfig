import type {Linter} from 'eslint';
import stylistic from '@stylistic/eslint-plugin';

const config: Linter.Config = {
    plugins: {'@stylistic': stylistic},
};

export default config;
