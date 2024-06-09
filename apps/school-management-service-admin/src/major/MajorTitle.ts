import { Major as TMajor } from "../api/major/Major";

export const MAJOR_TITLE_FIELD = "name";

export const MajorTitle = (record: TMajor): string => {
  return record.name?.toString() || String(record.id);
};
