import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RemarksModuleBase } from "./base/remarks.module.base";
import { RemarksService } from "./remarks.service";
import { RemarksController } from "./remarks.controller";
import { RemarksResolver } from "./remarks.resolver";

@Module({
  imports: [RemarksModuleBase, forwardRef(() => AuthModule)],
  controllers: [RemarksController],
  providers: [RemarksService, RemarksResolver],
  exports: [RemarksService],
})
export class RemarksModule {}
