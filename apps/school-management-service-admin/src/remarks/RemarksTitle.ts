import { Remarks as TRemarks } from "../api/remarks/Remarks";

export const REMARKS_TITLE_FIELD = "id";

export const RemarksTitle = (record: TRemarks): string => {
  return record.id?.toString() || String(record.id);
};
