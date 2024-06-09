import { RemarksWhereInput } from "./RemarksWhereInput";
import { RemarksOrderByInput } from "./RemarksOrderByInput";

export type RemarksFindManyArgs = {
  where?: RemarksWhereInput;
  orderBy?: Array<RemarksOrderByInput>;
  skip?: number;
  take?: number;
};
