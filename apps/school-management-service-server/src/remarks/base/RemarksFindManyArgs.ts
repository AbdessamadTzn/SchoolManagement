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
import { RemarksWhereInput } from "./RemarksWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { RemarksOrderByInput } from "./RemarksOrderByInput";

@ArgsType()
class RemarksFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RemarksWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => RemarksWhereInput, { nullable: true })
  @Type(() => RemarksWhereInput)
  where?: RemarksWhereInput;

  @ApiProperty({
    required: false,
    type: [RemarksOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [RemarksOrderByInput], { nullable: true })
  @Type(() => RemarksOrderByInput)
  orderBy?: Array<RemarksOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { RemarksFindManyArgs as RemarksFindManyArgs };