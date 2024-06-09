import { Abscence } from "../abscence/Abscence";
import { Major } from "../major/Major";
import { Marks } from "../marks/Marks";
import { Remarks } from "../remarks/Remarks";

export type Student = {
  abscences?: Array<Abscence>;
  createdAt: Date;
  dob: Date | null;
  email: string | null;
  id: string;
  major?: Major | null;
  marksItems?: Array<Marks>;
  name: string | null;
  password: string | null;
  remarksItems?: Array<Remarks>;
  role?: "Option1" | null;
  updatedAt: Date;
};
