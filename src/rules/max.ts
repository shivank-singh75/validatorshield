export function max(value: any, max: string): boolean {
    return typeof value === 'string' && value.length <= parseInt(max);
}