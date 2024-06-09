import { Student } from "../student/Student";

export type Remarks = {
  comment: string | null;
  createdAt: Date;
  id: string;
  student?: Student | null;
  updatedAt: Date;
};
