import CallService from "../../api/CallService";
import ArrayToObject from "./ArrayToObject";
const RunQuery = async (qry) => {
    const res = await CallService(`/mge/service.sbr?serviceName=DbExplorerSP.executeQuery&outputType=json`, {
        method: "POST",
        body: JSON.stringify({
            serviceName: "DbExplorerSP.executeQuery",
            requestBody: {
                sql: qry,
            },
        }),
    });
    const { data, ok, message } = res;
    if (ok) {
        if (data)
            return ArrayToObject(data);
        throw new Error("No data");
    }
    throw new Error(message);
};
export default RunQuery;
