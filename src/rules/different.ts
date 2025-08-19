import { RuleContext } from '../validator';

export function different(value: any, ctx: RuleContext, otherField: string): boolean {
    return ctx.data[otherField] !== value;
}

