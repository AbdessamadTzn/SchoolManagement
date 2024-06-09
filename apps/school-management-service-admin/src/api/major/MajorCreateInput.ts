import { StudentCreateNestedManyWithoutMajorsInput } from "./StudentCreateNestedManyWithoutMajorsInput";

export type MajorCreateInput = {
  description?: string | null;
  name?: string | null;
  students?: StudentCreateNestedManyWithoutMajorsInput;
};
