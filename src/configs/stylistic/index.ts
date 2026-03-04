import type {Linter} from 'eslint';
import {addPrefix} from '../../utils';
import base from './base';
import commonRules from './common';
import jsxRules from './jsx';

const common: Linter.Config = {
    rules: addPrefix`@stylistic`(commonRules),
};

const jsx: Linter.Config = {
    rules: addPrefix`@stylistic`(jsxRules),
};

const configs = {
    base: base as Linter.Config,
    common: common as Linter.Config,
    jsx: jsx as Linter.Config,
};

export default configs;
