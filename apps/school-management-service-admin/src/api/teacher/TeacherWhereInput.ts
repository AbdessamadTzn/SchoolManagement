import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TeacherWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  password?: StringNullableFilter;
  role?: "Option1";
};
