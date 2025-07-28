export function email(value: any): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}