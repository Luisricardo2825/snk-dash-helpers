import CallService from "./api/CallService";
export * from "./utils/layout/DashUtils";
import RunInNewThread from "./utils/utility/RunInNewThread";
import RunQuery from "./utils/db/RunQuery";
import inIframe from "./utils/web/CheckIframe";
import CookieManager from "./utils/web/Cookie";
const __IP_SERVER__ = (window as customWindowType).__IP_SERVER__;
export {
  CallService,
  RunInNewThread,
  RunQuery,
  inIframe,
  CookieManager,
  __IP_SERVER__,
};
export interface CustomRequestInit extends Omit<RequestInit, "body"> {
  method?: string;
  body?: string | object | BodyInit | null | undefined;
}

export type CallServiceArguments = {
  input?: RequestInfo | URL;
  baseUrl?: string;
  mgeSession?: string | undefined;
  init?: CustomRequestInit | undefined;
};

export type CallServiceRet<T> = {
  ok: boolean;
  message?: string | undefined;
  data?: T | undefined;
};

export type windowType = typeof window;
export type globalThisType = typeof globalThis;

export type customWindowType = globalThisType &
  windowType & {
    executeQueryAsync: Window["executeQuery"];
    /**IP do servidor atual */
    __IP_SERVER__: string | undefined;
  };

export interface SankhyaApiGenericResponse<T> {
  serviceName: string;
  status: string;
  pendingPrinting: string;
  transactionId: string;
  responseBody?: T;
}

export interface Window {
  /** Execute query padrão, fornecido pela janela de dashboards do sankhya */
  executeQuery?: (
    query: string,
    arr: Array<unknown>,
    onSuccess: (result: string) => void,
    onError: (result: string) => void
  ) => void;
  /** executeQuery melhorado, sendo executado de forma assincrona e retornando uma Promisse */
  executeQueryAsync: <T>(query: string, arr: Array<unknown>) => Promise<T>;
  openApp?: (resourceID: string, params?: object) => void;
  openLevel?: (nivel: string, params?: object) => void;
  refreshDetails?: (componentID: string, params?: object) => void;
  openPage?: (page: string, params?: object) => void;
  /** Parametros recebidos pela janela de parametros sankhya */
  Params?: NonNullable<{ [x: string]: unknown }>;
}

export interface SankhyaRet {
  serviceName: string;
  status: string;
  pendingPrinting: string;
  transactionId: string;
  responseBody: ResponseBody;
}

export interface ResponseBody {
  fieldsMetadata: FieldsMetadaum[];
  rows: rows;
  burstLimit: boolean;
  timeQuery: string;
  timeResultSet: string;
}
export type row = { [x: string | symbol]: string | number | unknown };
export type rows = Array<NonNullable<row>>;

export interface FieldsMetadaum {
  name: string;
  description: string;
  order: number;
  userType: string;
  precision?: number;
}
