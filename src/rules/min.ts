import { RuleContext } from '../validator';

export function min(value: any, _ctx: RuleContext, min: string): boolean {
    const minNum = parseFloat(min);
    if (typeof value === 'number') return value >= minNum;
    if (typeof value === 'string') return value.length >= minNum;
    if (Array.isArray(value)) return value.length >= minNum;
    return false;
}