import { SortOrder } from "../../util/SortOrder";

export type AbscenceOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  reason?: SortOrder;
  studentId?: SortOrder;
  updatedAt?: SortOrder;
};
