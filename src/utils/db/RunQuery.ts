import { SankhyaRet } from "../..";
import CallService from "../../api/CallService";
import ArrayToObject from "./ArrayToObject";

export const RunQuery = async <T>(qry: string) => {
  const res = await CallService<SankhyaRet>(
    `/mge/service.sbr?serviceName=DbExplorerSP.executeQuery&outputType=json`,
    {
      method: "POST",
      body: JSON.stringify({
        serviceName: "DbExplorerSP.executeQuery",
        requestBody: {
          sql: qry,
        },
      }),
    }
  );
  const { data, ok, message } = res;
  if (ok) {
    if (data) return ArrayToObject<T>(data);
    throw new Error("No data");
  }
  throw new Error(message);
};
