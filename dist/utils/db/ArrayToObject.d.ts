import { SankhyaRet } from "../../index";
export interface fields {
    [x: string]: string | number | unknown;
}
declare function ArrayToObject<T>(param: SankhyaRet): T;
export default ArrayToObject;
