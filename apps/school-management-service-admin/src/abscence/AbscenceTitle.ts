import { Abscence as TAbscence } from "../api/abscence/Abscence";

export const ABSCENCE_TITLE_FIELD = "id";

export const AbscenceTitle = (record: TAbscence): string => {
  return record.id?.toString() || String(record.id);
};
