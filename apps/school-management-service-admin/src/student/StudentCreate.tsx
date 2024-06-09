import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AbscenceTitle } from "../abscence/AbscenceTitle";
import { MajorTitle } from "../major/MajorTitle";
import { MarksTitle } from "../marks/MarksTitle";
import { RemarksTitle } from "../remarks/RemarksTitle";

export const StudentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="abscences"
          reference="Abscence"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AbscenceTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="dob" source="dob" />
        <TextInput label="email" source="email" type="email" />
        <ReferenceInput source="major.id" reference="Major" label="Major">
          <SelectInput optionText={MajorTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="marksItems"
          reference="Marks"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MarksTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <TextInput label="password" source="password" />
        <ReferenceArrayInput
          source="remarksItems"
          reference="Remarks"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RemarksTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="role"
          label="role"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
