import { Student } from "../student/Student";

export type Major = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  students?: Array<Student>;
  updatedAt: Date;
};
