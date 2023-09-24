"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunQuery = void 0;
const CallService_1 = __importDefault(require("../../api/CallService"));
const ArrayToObject_1 = __importDefault(require("./ArrayToObject"));
const RunQuery = async (qry) => {
    const res = await (0, CallService_1.default)(`/mge/service.sbr?serviceName=DbExplorerSP.executeQuery&outputType=json`, {
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
            return (0, ArrayToObject_1.default)(data);
        throw new Error("No data");
    }
    throw new Error(message);
};
exports.RunQuery = RunQuery;
