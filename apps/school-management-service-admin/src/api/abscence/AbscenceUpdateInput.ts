import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type AbscenceUpdateInput = {
  date?: Date | null;
  reason?: string | null;
  student?: StudentWhereUniqueInput | null;
};
