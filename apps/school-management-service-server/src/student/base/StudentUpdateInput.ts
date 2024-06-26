/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AbscenceUpdateManyWithoutStudentsInput } from "./AbscenceUpdateManyWithoutStudentsInput";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { MajorWhereUniqueInput } from "../../major/base/MajorWhereUniqueInput";
import { MarksUpdateManyWithoutStudentsInput } from "./MarksUpdateManyWithoutStudentsInput";
import { RemarksUpdateManyWithoutStudentsInput } from "./RemarksUpdateManyWithoutStudentsInput";
import { EnumStudentRole } from "./EnumStudentRole";

@InputType()
class StudentUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AbscenceUpdateManyWithoutStudentsInput,
  })
  @ValidateNested()
  @Type(() => AbscenceUpdateManyWithoutStudentsInput)
  @IsOptional()
  @Field(() => AbscenceUpdateManyWithoutStudentsInput, {
    nullable: true,
  })
  abscences?: AbscenceUpdateManyWithoutStudentsInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dob?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: () => MajorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MajorWhereUniqueInput)
  @IsOptional()
  @Field(() => MajorWhereUniqueInput, {
    nullable: true,
  })
  major?: MajorWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => MarksUpdateManyWithoutStudentsInput,
  })
  @ValidateNested()
  @Type(() => MarksUpdateManyWithoutStudentsInput)
  @IsOptional()
  @Field(() => MarksUpdateManyWithoutStudentsInput, {
    nullable: true,
  })
  marksItems?: MarksUpdateManyWithoutStudentsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string | null;

  @ApiProperty({
    required: false,
    type: () => RemarksUpdateManyWithoutStudentsInput,
  })
  @ValidateNested()
  @Type(() => RemarksUpdateManyWithoutStudentsInput)
  @IsOptional()
  @Field(() => RemarksUpdateManyWithoutStudentsInput, {
    nullable: true,
  })
  remarksItems?: RemarksUpdateManyWithoutStudentsInput;

  @ApiProperty({
    required: false,
    enum: EnumStudentRole,
  })
  @IsEnum(EnumStudentRole)
  @IsOptional()
  @Field(() => EnumStudentRole, {
    nullable: true,
  })
  role?: "Option1" | null;
}

export { StudentUpdateInput as StudentUpdateInput };
