import { AbscenceCreateNestedManyWithoutStudentsInput } from "./AbscenceCreateNestedManyWithoutStudentsInput";
import { MajorWhereUniqueInput } from "../major/MajorWhereUniqueInput";
import { MarksCreateNestedManyWithoutStudentsInput } from "./MarksCreateNestedManyWithoutStudentsInput";
import { RemarksCreateNestedManyWithoutStudentsInput } from "./RemarksCreateNestedManyWithoutStudentsInput";

export type StudentCreateInput = {
  abscences?: AbscenceCreateNestedManyWithoutStudentsInput;
  dob?: Date | null;
  email?: string | null;
  major?: MajorWhereUniqueInput | null;
  marksItems?: MarksCreateNestedManyWithoutStudentsInput;
  name?: string | null;
  password?: string | null;
  remarksItems?: RemarksCreateNestedManyWithoutStudentsInput;
  role?: "Option1" | null;
};
