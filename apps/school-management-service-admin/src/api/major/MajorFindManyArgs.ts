import { MajorWhereInput } from "./MajorWhereInput";
import { MajorOrderByInput } from "./MajorOrderByInput";

export type MajorFindManyArgs = {
  where?: MajorWhereInput;
  orderBy?: Array<MajorOrderByInput>;
  skip?: number;
  take?: number;
};
