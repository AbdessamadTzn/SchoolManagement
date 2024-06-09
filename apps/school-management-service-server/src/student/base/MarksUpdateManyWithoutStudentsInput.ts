/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { MarksWhereUniqueInput } from "../../marks/base/MarksWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MarksUpdateManyWithoutStudentsInput {
  @Field(() => [MarksWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MarksWhereUniqueInput],
  })
  connect?: Array<MarksWhereUniqueInput>;

  @Field(() => [MarksWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MarksWhereUniqueInput],
  })
  disconnect?: Array<MarksWhereUniqueInput>;

  @Field(() => [MarksWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MarksWhereUniqueInput],
  })
  set?: Array<MarksWhereUniqueInput>;
}

export { MarksUpdateManyWithoutStudentsInput as MarksUpdateManyWithoutStudentsInput };