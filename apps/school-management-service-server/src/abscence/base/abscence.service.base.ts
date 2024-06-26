/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Abscence as PrismaAbscence,
  Student as PrismaStudent,
} from "@prisma/client";

export class AbscenceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.AbscenceCountArgs, "select">): Promise<number> {
    return this.prisma.abscence.count(args);
  }

  async abscences<T extends Prisma.AbscenceFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AbscenceFindManyArgs>
  ): Promise<PrismaAbscence[]> {
    return this.prisma.abscence.findMany<Prisma.AbscenceFindManyArgs>(args);
  }
  async abscence<T extends Prisma.AbscenceFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AbscenceFindUniqueArgs>
  ): Promise<PrismaAbscence | null> {
    return this.prisma.abscence.findUnique(args);
  }
  async createAbscence<T extends Prisma.AbscenceCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AbscenceCreateArgs>
  ): Promise<PrismaAbscence> {
    return this.prisma.abscence.create<T>(args);
  }
  async updateAbscence<T extends Prisma.AbscenceUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AbscenceUpdateArgs>
  ): Promise<PrismaAbscence> {
    return this.prisma.abscence.update<T>(args);
  }
  async deleteAbscence<T extends Prisma.AbscenceDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AbscenceDeleteArgs>
  ): Promise<PrismaAbscence> {
    return this.prisma.abscence.delete(args);
  }

  async getStudent(parentId: string): Promise<PrismaStudent | null> {
    return this.prisma.abscence
      .findUnique({
        where: { id: parentId },
      })
      .student();
  }
}
