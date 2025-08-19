import { RuleContext } from '../validator';

export function max(value: any, _ctx: RuleContext, max: string): boolean {
    const maxNum = parseFloat(max);
    if (typeof value === 'number') return value <= maxNum;
    if (typeof value === 'string') return value.length <= maxNum;
    if (Array.isArray(value)) return value.length <= maxNum;
    return false;
}