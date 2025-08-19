import { RuleContext } from '../validator';

export function inRule(value: any, _ctx: RuleContext, ...allowed: string[]): boolean {
    return allowed.includes(String(value));
}

