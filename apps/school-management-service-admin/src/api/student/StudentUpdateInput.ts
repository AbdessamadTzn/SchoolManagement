import { AbscenceUpdateManyWithoutStudentsInput } from "./AbscenceUpdateManyWithoutStudentsInput";
import { MajorWhereUniqueInput } from "../major/MajorWhereUniqueInput";
import { MarksUpdateManyWithoutStudentsInput } from "./MarksUpdateManyWithoutStudentsInput";
import { RemarksUpdateManyWithoutStudentsInput } from "./RemarksUpdateManyWithoutStudentsInput";

export type StudentUpdateInput = {
  abscences?: AbscenceUpdateManyWithoutStudentsInput;
  dob?: Date | null;
  email?: string | null;
  major?: MajorWhereUniqueInput | null;
  marksItems?: MarksUpdateManyWithoutStudentsInput;
  name?: string | null;
  password?: string | null;
  remarksItems?: RemarksUpdateManyWithoutStudentsInput;
  role?: "Option1" | null;
};
