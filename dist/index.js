import CallService from "./api/CallService";
export * from "./utils/layout/DashUtils";
import RunInNewThread from "./utils/utility/RunInNewThread";
import RunQuery from "./utils/db/RunQuery";
import inIframe from "./utils/web/CheckIframe";
import CookieManager from "./utils/web/Cookie";
const __IP_SERVER__ = window.__IP_SERVER__;
export { CallService, RunInNewThread, RunQuery, inIframe, CookieManager, __IP_SERVER__, };
