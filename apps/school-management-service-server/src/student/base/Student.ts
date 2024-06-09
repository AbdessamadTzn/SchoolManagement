/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Abscence } from "../../abscence/base/Abscence";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Major } from "../../major/base/Major";
import { Marks } from "../../marks/base/Marks";
import { Remarks } from "../../remarks/base/Remarks";
import { EnumStudentRole } from "./EnumStudentRole";

@ObjectType()
class Student {
  @ApiProperty({
    required: false,
    type: () => [Abscence],
  })
  @ValidateNested()
  @Type(() => Abscence)
  @IsOptional()
  abscences?: Array<Abscence>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dob!: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => Major,
  })
  @ValidateNested()
  @Type(() => Major)
  @IsOptional()
  major?: Major | null;

  @ApiProperty({
    required: false,
    type: () => [Marks],
  })
  @ValidateNested()
  @Type(() => Marks)
  @IsOptional()
  marksItems?: Array<Marks>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Remarks],
  })
  @ValidateNested()
  @Type(() => Remarks)
  @IsOptional()
  remarksItems?: Array<Remarks>;

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

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Student as Student };
