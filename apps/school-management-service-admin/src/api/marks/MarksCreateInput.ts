import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type MarksCreateInput = {
  score?: number | null;
  student?: StudentWhereUniqueInput | null;
  subject?: string | null;
};
