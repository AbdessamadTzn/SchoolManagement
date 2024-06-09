import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MarksWhereInput = {
  id?: StringFilter;
  score?: FloatNullableFilter;
  student?: StudentWhereUniqueInput;
  subject?: StringNullableFilter;
};
