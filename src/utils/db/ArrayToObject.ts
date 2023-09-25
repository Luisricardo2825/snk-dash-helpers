import { FieldsMetadaum, SankhyaRet, row } from "../../index";

export interface fields {
  [x: string]: string | number | unknown;
}

function ArrayToObject<T>(param: SankhyaRet): T {
  const returnList: fields[] = [];
  try {
    const fields = param.responseBody.fieldsMetadata;
    const rows = param.responseBody.rows;

    for (const row of rows) {
      const newObj = SetFields(fields, row);
      returnList.push(newObj);
    }
    return returnList as T;
  } catch (e) {
    console.error("Error in ArrayToObject: ", e);
    return returnList as T;
  }
}

function SetFields(fields: FieldsMetadaum[], rows: row) {
  let object: fields = {};
  for (let index = 0; index < fields.length; index++) {
    const element = fields[index];

    object = { ...object, [element.name]: rows[index] as unknown };
  }
  return object;
}
export default ArrayToObject;
