import { RuleContext } from '../validator';

export function email(value: any, _ctx: RuleContext): boolean {
    if (typeof value !== 'string') return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}