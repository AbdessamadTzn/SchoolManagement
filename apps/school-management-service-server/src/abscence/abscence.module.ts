import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AbscenceModuleBase } from "./base/abscence.module.base";
import { AbscenceService } from "./abscence.service";
import { AbscenceController } from "./abscence.controller";
import { AbscenceResolver } from "./abscence.resolver";

@Module({
  imports: [AbscenceModuleBase, forwardRef(() => AuthModule)],
  controllers: [AbscenceController],
  providers: [AbscenceService, AbscenceResolver],
  exports: [AbscenceService],
})
export class AbscenceModule {}
