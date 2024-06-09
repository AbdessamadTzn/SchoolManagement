import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type AbscenceCreateInput = {
  date?: Date | null;
  reason?: string | null;
  student?: StudentWhereUniqueInput | null;
};
