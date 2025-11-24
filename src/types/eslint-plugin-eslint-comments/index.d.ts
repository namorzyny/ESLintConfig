declare module 'eslint-plugin-eslint-comments' {
    import type {ESLint} from 'eslint';

    enum Rules {
        'disable-enable-pair',
        'no-aggregating-enable',
        'no-duplicate-disable',
        'no-restricted-disable',
        'no-unlimited-disable',
        'no-unused-disable',
        'no-unused-enable',
        'no-use',
        'require-description',
    }

    enum Configs {
        recommended,
    }

    const rules: Pick<ESLint.Plugin['rules'], keyof typeof Rules>;
    const configs: Pick<ESLint.Plugin['configs'], keyof typeof Configs>;
    export default {rules, configs};
}
