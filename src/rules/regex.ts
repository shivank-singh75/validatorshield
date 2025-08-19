import { RuleContext } from '../validator';

export function regex(value: any, _ctx: RuleContext, pattern: string, flags?: string): boolean {
    if (typeof value !== 'string') return false;
    try {
        const re = new RegExp(pattern, flags);
        return re.test(value);
    } catch {
        return false;
    }
}

