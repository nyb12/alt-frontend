import React from "react";

import "./App.css";
import { AppShell } from "@shiksha/common-lib";
import courseList from "pages/courseList";
import { hotjar } from "react-hotjar";
import SubjectList from "pages/subjectList";
import LessonList from "pages/lessonList";

function App() {
  const routes = [
    {
      moduleName: "studentprogram",
      path: "",
      component: SubjectList,
    },
    {
      moduleName: "studentprogram",
      path: ":name/courses",
      component: courseList,
    },
    {
      moduleName: "studentprogram",
      path: ":name/courses/:id/lessons/:type",
      component: LessonList,
    },
  ];
  const LoginComponent = React.lazy(() => import("core/Login"));
  const skipLogin = !(
    process.env.REACT_APP_OAUTH_PROXY_ENABLED == undefined ||
    JSON.parse(process.env.REACT_APP_OAUTH_PROXY_ENABLED) == false
  );

  return (
    <AppShell
      basename={process.env.PUBLIC_URL}
      routes={routes}
      AuthComponent={LoginComponent}
      skipLogin={skipLogin}
      _authComponent={{ swPath: "/modules/selfassessment" }}
    />
  );
}

export default App;