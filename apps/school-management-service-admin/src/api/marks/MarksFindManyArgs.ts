import { MarksWhereInput } from "./MarksWhereInput";
import { MarksOrderByInput } from "./MarksOrderByInput";

export type MarksFindManyArgs = {
  where?: MarksWhereInput;
  orderBy?: Array<MarksOrderByInput>;
  skip?: number;
  take?: number;
};
