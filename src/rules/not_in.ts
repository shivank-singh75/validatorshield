import { RuleContext } from '../validator';

export function notIn(value: any, _ctx: RuleContext, ...disallowed: string[]): boolean {
    return !disallowed.includes(String(value));
}

