import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MajorModuleBase } from "./base/major.module.base";
import { MajorService } from "./major.service";
import { MajorController } from "./major.controller";
import { MajorResolver } from "./major.resolver";

@Module({
  imports: [MajorModuleBase, forwardRef(() => AuthModule)],
  controllers: [MajorController],
  providers: [MajorService, MajorResolver],
  exports: [MajorService],
})
export class MajorModule {}
