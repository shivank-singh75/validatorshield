import { RuleContext } from '../validator';

export function required(value: any, _ctx: RuleContext): boolean {
    if (typeof value === 'string') {
        return value.trim() !== '';
    }
    return value !== undefined && value !== null;
}