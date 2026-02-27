export function newId(): string {
    return `id${Math.random().toString(36).slice(2, 10) }-${Date.now()}`;
}