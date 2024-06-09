import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StudentListRelationFilter } from "../student/StudentListRelationFilter";

export type MajorWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  students?: StudentListRelationFilter;
};
