/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MajorWhereUniqueInput } from "./MajorWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MajorUpdateInput } from "./MajorUpdateInput";

@ArgsType()
class UpdateMajorArgs {
  @ApiProperty({
    required: true,
    type: () => MajorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MajorWhereUniqueInput)
  @Field(() => MajorWhereUniqueInput, { nullable: false })
  where!: MajorWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => MajorUpdateInput,
  })
  @ValidateNested()
  @Type(() => MajorUpdateInput)
  @Field(() => MajorUpdateInput, { nullable: false })
  data!: MajorUpdateInput;
}

export { UpdateMajorArgs as UpdateMajorArgs };