import { Student } from "../student/Student";

export type Marks = {
  createdAt: Date;
  id: string;
  score: number | null;
  student?: Student | null;
  subject: string | null;
  updatedAt: Date;
};
