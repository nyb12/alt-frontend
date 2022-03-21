import React from "react";
import "./App.css";
import Login from "pages/Login";
import { extendTheme, NativeBaseProvider } from "native-base";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyClasses from "pages/myclasses/MyClasses";
import manifest from "./manifest.json";
import ClassDetails from "pages/myclasses/ClassDetails";
import { DEFAULT_THEME } from "@shiksha/common-lib";

const theme = extendTheme(DEFAULT_THEME);

function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="my-classes" element={<MyClasses />} />
          <Route path="my-classes/:classId" element={<ClassDetails />} />

          <Route path="*" element={<Login />} />
        </Routes>
      </Router>
    </NativeBaseProvider>
  );
}

export default App;