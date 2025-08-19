import { RuleContext } from '../validator';

export function confirmed(value: any, ctx: RuleContext): boolean {
    const confirmationField = `${ctx.field}_confirmation`;
    return ctx.data[confirmationField] === value;
}

