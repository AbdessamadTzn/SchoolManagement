import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { StudentList } from "./student/StudentList";
import { StudentCreate } from "./student/StudentCreate";
import { StudentEdit } from "./student/StudentEdit";
import { StudentShow } from "./student/StudentShow";
import { TeacherList } from "./teacher/TeacherList";
import { TeacherCreate } from "./teacher/TeacherCreate";
import { TeacherEdit } from "./teacher/TeacherEdit";
import { TeacherShow } from "./teacher/TeacherShow";
import { MajorList } from "./major/MajorList";
import { MajorCreate } from "./major/MajorCreate";
import { MajorEdit } from "./major/MajorEdit";
import { MajorShow } from "./major/MajorShow";
import { AbscenceList } from "./abscence/AbscenceList";
import { AbscenceCreate } from "./abscence/AbscenceCreate";
import { AbscenceEdit } from "./abscence/AbscenceEdit";
import { AbscenceShow } from "./abscence/AbscenceShow";
import { MarksList } from "./marks/MarksList";
import { MarksCreate } from "./marks/MarksCreate";
import { MarksEdit } from "./marks/MarksEdit";
import { MarksShow } from "./marks/MarksShow";
import { RemarksList } from "./remarks/RemarksList";
import { RemarksCreate } from "./remarks/RemarksCreate";
import { RemarksEdit } from "./remarks/RemarksEdit";
import { RemarksShow } from "./remarks/RemarksShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"SchoolManagementService"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Student"
          list={StudentList}
          edit={StudentEdit}
          create={StudentCreate}
          show={StudentShow}
        />
        <Resource
          name="Teacher"
          list={TeacherList}
          edit={TeacherEdit}
          create={TeacherCreate}
          show={TeacherShow}
        />
        <Resource
          name="Major"
          list={MajorList}
          edit={MajorEdit}
          create={MajorCreate}
          show={MajorShow}
        />
        <Resource
          name="Abscence"
          list={AbscenceList}
          edit={AbscenceEdit}
          create={AbscenceCreate}
          show={AbscenceShow}
        />
        <Resource
          name="Marks"
          list={MarksList}
          edit={MarksEdit}
          create={MarksCreate}
          show={MarksShow}
        />
        <Resource
          name="Remarks"
          list={RemarksList}
          edit={RemarksEdit}
          create={RemarksCreate}
          show={RemarksShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
