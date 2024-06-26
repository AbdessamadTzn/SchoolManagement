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
import { AbscenceCreateNestedManyWithoutStudentsInput } from "./AbscenceCreateNestedManyWithoutStudentsInput";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { MajorWhereUniqueInput } from "../../major/base/MajorWhereUniqueInput";
import { MarksCreateNestedManyWithoutStudentsInput } from "./MarksCreateNestedManyWithoutStudentsInput";
import { RemarksCreateNestedManyWithoutStudentsInput } from "./RemarksCreateNestedManyWithoutStudentsInput";
import { EnumStudentRole } from "./EnumStudentRole";

@InputType()
class StudentCreateInput {
  @ApiProperty({
    required: false,
    type: () => AbscenceCreateNestedManyWithoutStudentsInput,
  })
  @ValidateNested()
  @Type(() => AbscenceCreateNestedManyWithoutStudentsInput)
  @IsOptional()
  @Field(() => AbscenceCreateNestedManyWithoutStudentsInput, {
    nullable: true,
  })
  abscences?: AbscenceCreateNestedManyWithoutStudentsInput;

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
    type: () => MarksCreateNestedManyWithoutStudentsInput,
  })
  @ValidateNested()
  @Type(() => MarksCreateNestedManyWithoutStudentsInput)
  @IsOptional()
  @Field(() => MarksCreateNestedManyWithoutStudentsInput, {
    nullable: true,
  })
  marksItems?: MarksCreateNestedManyWithoutStudentsInput;

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
    type: () => RemarksCreateNestedManyWithoutStudentsInput,
  })
  @ValidateNested()
  @Type(() => RemarksCreateNestedManyWithoutStudentsInput)
  @IsOptional()
  @Field(() => RemarksCreateNestedManyWithoutStudentsInput, {
    nullable: true,
  })
  remarksItems?: RemarksCreateNestedManyWithoutStudentsInput;

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

export { StudentCreateInput as StudentCreateInput };
