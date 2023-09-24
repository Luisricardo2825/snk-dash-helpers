type Cookie = {
  [x: string | symbol]: string | undefined;
};
export default class CookieManager {
  cookies: Cookie = {};
  constructor() {
    this.loadCookies();
  }
  setCookie(name: string, value: string, days: number) {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  getCookie(name: string) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  private loadCookies() {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
      const [name, value] = cookie.split("=");
      this.cookies[name] = value;
    }
  }
  eraseCookie(name: string) {
    this.setCookie(name, "", -1);
  }
  set(name: string, value: string) {
    this.cookies[name] = value;
    this.setCookie(name, value, 365);
  }
  get(name: string) {
    return this.cookies[name];
  }
  remove(name: string) {
    delete this.cookies[name];
    this.eraseCookie(name);
  }
  clear() {
    for (const key in this.cookies) {
      this.remove(key);
    }
  }
  has(name: string) {
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
