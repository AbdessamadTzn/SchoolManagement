import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MarksModuleBase } from "./base/marks.module.base";
import { MarksService } from "./marks.service";
import { MarksController } from "./marks.controller";
import { MarksResolver } from "./marks.resolver";

@Module({
  imports: [MarksModuleBase, forwardRef(() => AuthModule)],
  controllers: [MarksController],
  providers: [MarksService, MarksResolver],
  exports: [MarksService],
})
export class MarksModule {}
