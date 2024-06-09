import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RemarksService } from "./remarks.service";
import { RemarksControllerBase } from "./base/remarks.controller.base";

@swagger.ApiTags("remarks")
@common.Controller("remarks")
export class RemarksController extends RemarksControllerBase {
  constructor(
    protected readonly service: RemarksService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
