import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MarksService } from "./marks.service";
import { MarksControllerBase } from "./base/marks.controller.base";

@swagger.ApiTags("marks")
@common.Controller("marks")
export class MarksController extends MarksControllerBase {
  constructor(
    protected readonly service: MarksService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
