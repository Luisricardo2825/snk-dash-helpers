import inIframe from "../utils/web/CheckIframe";
import CookieManager from "../utils/web/Cookie";
import runInNewThread from "../utils/utility/RunInNewThread";
import { __IP_SERVER__ } from "../index";
export default async function CallService(input, init) {
    let retObj = {
        ok: false,
        message: undefined,
        data: undefined,
    };
    const isIframe = inIframe();
    const defaultHeaders = new Headers();
    defaultHeaders.append("Content-Type", "application/json");
    const localIP = __IP_SERVER__;
    if (!isIframe) {
        const body = JSON.stringify({
            body: init?.body,
            endpoint: `${input}`,
        });
        try {
            const response = await fetch(`http://${localIP}:3000/callService`, {
                ...init,
                method: init?.method || "POST",
                body: body,
                redirect: "follow",
                headers: defaultHeaders,
            });
            const data = await response.json();
            const status = data.status === "1";
            if (!status) {
                retObj.message = data.statusMessage;
            }
            retObj.ok = status;
            retObj.data = data;
        }
        catch (error) {
            retObj.message = error + "";
            retObj.ok = false;
            retObj.data = undefined;
        }
    }
    else {
        const ret = await CallServiceSankhya(input, init);
        retObj = ret;
    }
    return retObj;
}
async function CallServiceSankhya(input, init) {
    const baseUrl = window.location.origin;
    const cookieManeger = new CookieManager();
    const mgeSession = cookieManeger.get("JSESSIONID");
    const data = await runInNewThread(async (args) => {
        const CallServiceWorker = async ({ input, baseUrl, mgeSession, init, }) => {
            const retObj = {
                ok: false,
                message: undefined,
                data: undefined,
            };
            const defaultHeaders = new Headers();
            defaultHeaders.append("Content-Type", "application/json");
            const endpoint = input instanceof URL
                ? new URL(input.toString()).pathname
                : input?.toString();
            const url = `${baseUrl}${endpoint?.toString()}`;
            // Add query parameters to URL
            const urlWithParams = new URL(url);
            if (mgeSession)
                urlWithParams.searchParams.append("mgeSession", mgeSession.split(".")[0]);
            const response = await fetch(urlWithParams.toString(), {
                ...init,
                headers: init?.headers || defaultHeaders,
                body: typeof init?.body === "string"
                    ? init?.body
                    : JSON.stringify(init?.body),
                referrer: baseUrl,
            });
            const data = await response.json();
            const status = data.status === "1";
            if (!status) {
                retObj.message = data.statusMessage;
            }
            retObj.ok = status;
            retObj.data = data;
            return retObj;
        };
        // eslint-disable-next-line prefer-rest-params
        const dados = await CallServiceWorker(args);
        return dados;
    }, { input, baseUrl, mgeSession, init });
    return data;
}
