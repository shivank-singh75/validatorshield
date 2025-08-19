import { RuleContext } from '../validator';

export function arrayRule(value: any, _ctx: RuleContext): boolean {
    return Array.isArray(value);
}

