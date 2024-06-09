import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type MarksUpdateInput = {
  score?: number | null;
  student?: StudentWhereUniqueInput | null;
  subject?: string | null;
};
