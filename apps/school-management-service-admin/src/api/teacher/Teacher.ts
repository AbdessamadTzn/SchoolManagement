export type Teacher = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  password: string | null;
  role?: "Option1" | null;
  updatedAt: Date;
};
