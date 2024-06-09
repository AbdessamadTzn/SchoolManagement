import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AbscenceServiceBase } from "./base/abscence.service.base";

@Injectable()
export class AbscenceService extends AbscenceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
