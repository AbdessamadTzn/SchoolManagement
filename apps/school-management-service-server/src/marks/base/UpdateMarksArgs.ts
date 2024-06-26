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
import { MarksWhereUniqueInput } from "./MarksWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MarksUpdateInput } from "./MarksUpdateInput";

@ArgsType()
class UpdateMarksArgs {
  @ApiProperty({
    required: true,
    type: () => MarksWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MarksWhereUniqueInput)
  @Field(() => MarksWhereUniqueInput, { nullable: false })
  where!: MarksWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => MarksUpdateInput,
  })
  @ValidateNested()
  @Type(() => MarksUpdateInput)
  @Field(() => MarksUpdateInput, { nullable: false })
  data!: MarksUpdateInput;
}

export { UpdateMarksArgs as UpdateMarksArgs };
