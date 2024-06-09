import { AbscenceListRelationFilter } from "../abscence/AbscenceListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MajorWhereUniqueInput } from "../major/MajorWhereUniqueInput";
import { MarksListRelationFilter } from "../marks/MarksListRelationFilter";
import { RemarksListRelationFilter } from "../remarks/RemarksListRelationFilter";

export type StudentWhereInput = {
  abscences?: AbscenceListRelationFilter;
  dob?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  major?: MajorWhereUniqueInput;
  marksItems?: MarksListRelationFilter;
  name?: StringNullableFilter;
  password?: StringNullableFilter;
  remarksItems?: RemarksListRelationFilter;
  role?: "Option1";
};
