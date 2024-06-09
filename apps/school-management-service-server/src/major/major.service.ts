import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MajorServiceBase } from "./base/major.service.base";

@Injectable()
export class MajorService extends MajorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
