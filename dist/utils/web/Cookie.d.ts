type Cookie = {
    [x: string | symbol]: string | undefined;
};
export default class CookieManager {
    cookies: Cookie;
    constructor();
    setCookie(name: string, value: string, days: number): void;
    getCookie(name: string): string | null;
    private loadCookies;
    eraseCookie(name: string): void;
    set(name: string, value: string): void;
    get(name: string): string | undefined;
    remove(name: string): void;
    clear(): void;
    has(name: string): boolean;
    getKeys(): string[];
    getValues(): (string | undefined)[];
    getEntries(): [string, string | undefined][];
    size(): number;
}
export {};
