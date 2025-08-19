import { RuleContext } from '../validator';

export function booleanRule(value: any, _ctx: RuleContext): boolean {
    return typeof value === 'boolean';
}

