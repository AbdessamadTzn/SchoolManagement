import { AbscenceWhereInput } from "./AbscenceWhereInput";
import { AbscenceOrderByInput } from "./AbscenceOrderByInput";

export type AbscenceFindManyArgs = {
  where?: AbscenceWhereInput;
  orderBy?: Array<AbscenceOrderByInput>;
  skip?: number;
  take?: number;
};
