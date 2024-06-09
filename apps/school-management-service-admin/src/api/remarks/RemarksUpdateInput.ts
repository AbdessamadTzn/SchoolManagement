import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type RemarksUpdateInput = {
  comment?: string | null;
  student?: StudentWhereUniqueInput | null;
};
