import { CustomRequestInit } from "../index";
export default function CallService<T>(input: RequestInfo | URL, init?: CustomRequestInit | undefined): Promise<{
    ok: boolean;
    message?: string | undefined;
    data?: T | undefined;
}>;
