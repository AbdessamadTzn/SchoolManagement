/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Major } from "./Major";
import { MajorCountArgs } from "./MajorCountArgs";
import { MajorFindManyArgs } from "./MajorFindManyArgs";
import { MajorFindUniqueArgs } from "./MajorFindUniqueArgs";
import { CreateMajorArgs } from "./CreateMajorArgs";
import { UpdateMajorArgs } from "./UpdateMajorArgs";
import { DeleteMajorArgs } from "./DeleteMajorArgs";
import { StudentFindManyArgs } from "../../student/base/StudentFindManyArgs";
import { Student } from "../../student/base/Student";
import { MajorService } from "../major.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Major)
export class MajorResolverBase {
  constructor(
    protected readonly service: MajorService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Major",
    action: "read",
    possession: "any",
  })
  async _majorsMeta(
    @graphql.Args() args: MajorCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Major])
  @nestAccessControl.UseRoles({
    resource: "Major",
    action: "read",
    possession: "any",
  })
  async majors(@graphql.Args() args: MajorFindManyArgs): Promise<Major[]> {
    return this.service.majors(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Major, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Major",
    action: "read",
    possession: "own",
  })
  async major(
    @graphql.Args() args: MajorFindUniqueArgs
  ): Promise<Major | null> {
    const result = await this.service.major(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Major)
  @nestAccessControl.UseRoles({
    resource: "Major",
    action: "create",
    possession: "any",
  })
  async createMajor(@graphql.Args() args: CreateMajorArgs): Promise<Major> {
    return await this.service.createMajor({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Major)
  @nestAccessControl.UseRoles({
    resource: "Major",
    action: "update",
    possession: "any",
  })
  async updateMajor(
    @graphql.Args() args: UpdateMajorArgs
  ): Promise<Major | null> {
    try {
      return await this.service.updateMajor({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Major)
  @nestAccessControl.UseRoles({
    resource: "Major",
    action: "delete",
    possession: "any",
  })
  async deleteMajor(
    @graphql.Args() args: DeleteMajorArgs
  ): Promise<Major | null> {
    try {
      return await this.service.deleteMajor(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Student], { name: "students" })
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "read",
    possession: "any",
  })
  async findStudents(
    @graphql.Parent() parent: Major,
    @graphql.Args() args: StudentFindManyArgs
  ): Promise<Student[]> {
    const results = await this.service.findStudents(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}