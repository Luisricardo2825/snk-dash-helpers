"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ArrayToObject(param) {
    const returnList = [];
    try {
        const fields = param.responseBody.fieldsMetadata;
        const rows = param.responseBody.rows;
        for (const row of rows) {
            const newObj = SetFields(fields, row);
            returnList.push(newObj);
        }
        return returnList;
    }
    catch (e) {
        console.error("Error in ArrayToObject: ", e);
        return returnList;
    }
}
function SetFields(fields, rows) {
    let object = {};
    for (let index = 0; index < fields.length; index++) {
        const element = fields[index];
        object = { ...object, [element.name]: rows[index] };
    }
    return object;
}
exports.default = ArrayToObject;
