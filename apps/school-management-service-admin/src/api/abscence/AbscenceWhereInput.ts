import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type AbscenceWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  reason?: StringNullableFilter;
  student?: StudentWhereUniqueInput;
};
