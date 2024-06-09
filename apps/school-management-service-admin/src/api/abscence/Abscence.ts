import { Student } from "../student/Student";

export type Abscence = {
  createdAt: Date;
  date: Date | null;
  id: string;
  reason: string | null;
  student?: Student | null;
  updatedAt: Date;
};
