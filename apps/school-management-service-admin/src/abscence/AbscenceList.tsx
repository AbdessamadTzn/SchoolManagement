import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { STUDENT_TITLE_FIELD } from "../student/StudentTitle";

export const AbscenceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Abscences"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <TextField label="ID" source="id" />
        <TextField label="reason" source="reason" />
        <ReferenceField label="Student" source="student.id" reference="Student">
          <TextField source={STUDENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
