import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { StudentTitle } from "../student/StudentTitle";

export const MarksEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="score" source="score" />
        <ReferenceInput source="student.id" reference="Student" label="Student">
          <SelectInput optionText={StudentTitle} />
        </ReferenceInput>
        <TextInput label="subject" source="subject" />
      </SimpleForm>
    </Edit>
  );
};
