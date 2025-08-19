import { RuleContext } from '../validator';

export function numberRule(value: any, _ctx: RuleContext): boolean {
    return typeof value === 'number' && Number.isFinite(value);
}

