import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RemarksServiceBase } from "./base/remarks.service.base";

@Injectable()
export class RemarksService extends RemarksServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
