/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { MarksService } from "../marks.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MarksCreateInput } from "./MarksCreateInput";
import { Marks } from "./Marks";
import { MarksFindManyArgs } from "./MarksFindManyArgs";
import { MarksWhereUniqueInput } from "./MarksWhereUniqueInput";
import { MarksUpdateInput } from "./MarksUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MarksControllerBase {
  constructor(
    protected readonly service: MarksService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Marks })
  @nestAccessControl.UseRoles({
    resource: "Marks",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createMarks(@common.Body() data: MarksCreateInput): Promise<Marks> {
    return await this.service.createMarks({
      data: {
        ...data,

        student: data.student
          ? {
              connect: data.student,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        score: true,

        student: {
          select: {
            id: true,
          },
        },

        subject: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Marks] })
  @ApiNestedQuery(MarksFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Marks",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async marksItems(@common.Req() request: Request): Promise<Marks[]> {
    const args = plainToClass(MarksFindManyArgs, request.query);
    return this.service.marksItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        score: true,

        student: {
          select: {
            id: true,
          },
        },

        subject: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Marks })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Marks",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async marks(
    @common.Param() params: MarksWhereUniqueInput
  ): Promise<Marks | null> {
    const result = await this.service.marks({
      where: params,
      select: {
        createdAt: true,
        id: true,
        score: true,

        student: {
          select: {
            id: true,
          },
        },

        subject: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Marks })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Marks",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateMarks(
    @common.Param() params: MarksWhereUniqueInput,
    @common.Body() data: MarksUpdateInput
  ): Promise<Marks | null> {
    try {
      return await this.service.updateMarks({
        where: params,
        data: {
          ...data,

          student: data.student
            ? {
                connect: data.student,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          score: true,

          student: {
            select: {
              id: true,
            },
          },

          subject: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Marks })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Marks",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteMarks(
    @common.Param() params: MarksWhereUniqueInput
  ): Promise<Marks | null> {
    try {
      return await this.service.deleteMarks({
        where: params,
        select: {
          createdAt: true,
          id: true,
          score: true,

          student: {
            select: {
              id: true,
            },
          },

          subject: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
