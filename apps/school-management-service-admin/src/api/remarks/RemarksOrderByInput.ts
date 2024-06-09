import { SortOrder } from "../../util/SortOrder";

export type RemarksOrderByInput = {
  comment?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  studentId?: SortOrder;
  updatedAt?: SortOrder;
};
