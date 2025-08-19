import { RuleContext } from '../validator';

export function stringRule(value: any, _ctx: RuleContext): boolean {
    return typeof value === 'string';
}

