import { Marks as TMarks } from "../api/marks/Marks";

export const MARKS_TITLE_FIELD = "subject";

export const MarksTitle = (record: TMarks): string => {
  return record.subject?.toString() || String(record.id);
};
