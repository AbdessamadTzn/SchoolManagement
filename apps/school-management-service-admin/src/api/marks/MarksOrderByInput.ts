import { SortOrder } from "../../util/SortOrder";

export type MarksOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  score?: SortOrder;
  studentId?: SortOrder;
  subject?: SortOrder;
  updatedAt?: SortOrder;
};
