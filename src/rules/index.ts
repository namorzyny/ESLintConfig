import type {Linter} from 'eslint';
import {addPrefix} from '../utils';
import stylisticRules from './stylistic';

const rules = {
    stylistic: addPrefix`@stylistic`(stylisticRules) as Partial<Linter.RulesRecord>,
};

export default rules;
