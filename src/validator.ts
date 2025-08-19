import { required } from './rules/required';
import { email } from './rules/email';
import { min } from './rules/min';
import { max } from './rules/max';
import { exists } from './rules/exists';
import { unique } from './rules/unique';
import { stringRule } from './rules/string';
import { numberRule } from './rules/number';
import { integer } from './rules/integer';
import { booleanRule } from './rules/boolean';
import { arrayRule } from './rules/array';
import { url } from './rules/url';
import { regex } from './rules/regex';
import { inRule } from './rules/in';
import { notIn } from './rules/not_in';
import { confirmed } from './rules/confirmed';
import { same } from './rules/same';
import { different } from './rules/different';
import { between } from './rules/between';
import { size } from './rules/size';

export type RuleContext = { field: string; data: Record<string, any> };
export type RuleFunction = (value: any, ctx: RuleContext, ...args: string[]) => boolean | Promise<boolean>;

const ruleFns: Record<string, RuleFunction> = {
  required,
  email,
  min,
  max,
  exists,
  unique,
  string: stringRule,
  number: numberRule,
  integer,
  boolean: booleanRule,
  array: arrayRule,
  url,
  regex,
  in: inRule,
  not_in: notIn,
  confirmed,
  same,
  different,
  between,
  size,
};

export async function validate(
  data: Record<string, any>,
  rules: Record<string, string[]>
): Promise<{ passed: boolean; errors: Record<string, string[]> }> {
  const errors: Record<string, string[]> = {};
  let passed = true;

  for (const field in rules) {
    const fieldRules = rules[field];
    const value = data[field];
    const ctx = { field, data };

    const hasRequired = fieldRules.some(r => r.split(/:|,/g)[0] === 'required');
    if ((value === undefined || value === null || value === '') && !hasRequired) {
      continue;
    }

    for (const rule of fieldRules) {
      const [ruleName, ...args] = rule.split(/:|,/g);
      const ruleFn = ruleFns[ruleName];

      if (ruleFn) {
        const valid = await ruleFn(value, ctx, ...args);
        if (!valid) {
          passed = false;
          errors[field] = errors[field] || [];
          errors[field].push(`${field} failed validation: ${rule}`);
        }
      }
    }
  }

  return { passed, errors };
}