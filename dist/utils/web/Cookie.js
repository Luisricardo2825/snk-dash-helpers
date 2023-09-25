export default class CookieManager {
    cookies = {};
    constructor() {
        this.loadCookies();
    }
    setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }
    getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == " ")
                c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0)
                return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    loadCookies() {
        const cookies = document.cookie.split(";");
        for (const cookie of cookies) {
            const [name, value] = cookie.split("=");
            this.cookies[name] = value;
        }
    }
    eraseCookie(name) {
        this.setCookie(name, "", -1);
    }
    set(name, value) {
        this.cookies[name] = value;
        this.setCookie(name, value, 365);
    }
    get(name) {
        return this.cookies[name];
    }
    remove(name) {
        delete this.cookies[name];
        this.eraseCookie(name);
    }
    clear() {
        for (const key in this.cookies) {
            this.remove(key);
        }
    }
    has(name) {
        return this.cookies[name] !== undefined;
    }
    getKeys() {
        return Object.keys(this.cookies);
    }
    getValues() {
        return Object.values(this.cookies);
    }
    getEntries() {
        return Object.entries(this.cookies);
    }
    size() {
        return this.getKeys().length;
    }
}
