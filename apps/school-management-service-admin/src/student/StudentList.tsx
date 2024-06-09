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
import { MAJOR_TITLE_FIELD } from "../major/MajorTitle";

export const StudentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Students"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
