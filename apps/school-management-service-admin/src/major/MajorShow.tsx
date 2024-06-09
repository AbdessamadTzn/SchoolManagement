import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { MAJOR_TITLE_FIELD } from "./MajorTitle";

export const MajorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Student"
          target="majorId"
          label="Students"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="dob" source="dob" />
            <TextField label="email" source="email" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Major" source="major.id" reference="Major">
              <TextField source={MAJOR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="name" source="name" />
            <TextField label="password" source="password" />
            <TextField label="role" source="role" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
