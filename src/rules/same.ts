import { RuleContext } from '../validator';

export function same(value: any, ctx: RuleContext, otherField: string): boolean {
    return ctx.data[otherField] === value;
}

