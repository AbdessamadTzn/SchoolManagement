import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MajorService } from "./major.service";
import { MajorControllerBase } from "./base/major.controller.base";

@swagger.ApiTags("majors")
@common.Controller("majors")
export class MajorController extends MajorControllerBase {
  constructor(
    protected readonly service: MajorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
