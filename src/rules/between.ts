import { RuleContext } from '../validator';

export function between(value: any, _ctx: RuleContext, min: string, max: string): boolean {
    const minNum = parseFloat(min);
    const maxNum = parseFloat(max);
    if (typeof value === 'number') return value >= minNum && value <= maxNum;
    if (typeof value === 'string') return value.length >= minNum && value.length <= maxNum;
    if (Array.isArray(value)) return value.length >= minNum && value.length <= maxNum;
    return false;
}

