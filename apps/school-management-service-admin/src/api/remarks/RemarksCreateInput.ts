import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type RemarksCreateInput = {
  comment?: string | null;
  student?: StudentWhereUniqueInput | null;
};
