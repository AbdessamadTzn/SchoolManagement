import { SortOrder } from "../../util/SortOrder";

export type StudentOrderByInput = {
  createdAt?: SortOrder;
  dob?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  majorId?: SortOrder;
  name?: SortOrder;
  password?: SortOrder;
  role?: SortOrder;
  updatedAt?: SortOrder;
};
