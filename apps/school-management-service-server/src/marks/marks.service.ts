import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MarksServiceBase } from "./base/marks.service.base";

@Injectable()
export class MarksService extends MarksServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
