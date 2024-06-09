import { StudentUpdateManyWithoutMajorsInput } from "./StudentUpdateManyWithoutMajorsInput";

export type MajorUpdateInput = {
  description?: string | null;
  name?: string | null;
  students?: StudentUpdateManyWithoutMajorsInput;
};
