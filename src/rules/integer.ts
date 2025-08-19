import { RuleContext } from '../validator';

export function integer(value: any, _ctx: RuleContext): boolean {
    return typeof value === 'number' && Number.isInteger(value);
}

