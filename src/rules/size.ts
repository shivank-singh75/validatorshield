import { RuleContext } from '../validator';

export function size(value: any, _ctx: RuleContext, sizeStr: string): boolean {
    const sizeNum = parseFloat(sizeStr);
    if (typeof value === 'number') return value === sizeNum;
    if (typeof value === 'string') return value.length === sizeNum;
    if (Array.isArray(value)) return value.length === sizeNum;
    return false;
}

