import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AbscenceService } from "./abscence.service";
import { AbscenceControllerBase } from "./base/abscence.controller.base";

@swagger.ApiTags("abscences")
@common.Controller("abscences")
export class AbscenceController extends AbscenceControllerBase {
  constructor(
    protected readonly service: AbscenceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
