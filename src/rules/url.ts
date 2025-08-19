import { RuleContext } from '../validator';

export function url(value: any, _ctx: RuleContext): boolean {
    if (typeof value !== 'string') return false;
    try {
        new URL(value);
        return true;
    } catch {
        return false;
    }
}

