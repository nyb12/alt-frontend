const { dependencies } = require("./package.json");

module.exports = {
  name: "studentprogram",
  exposes: {
    "./App": "./src/App",
    "./StudentProgram": "./src/pages/courseList",
    "./Lessons": "./src/pages/lessonList",
    "./subjectList": "./src/pages/subjectList",
  },
  remotes: {
    core: `core@[window.appModules.core.url]/moduleEntry.js`,
  },
  filename: "moduleEntry.js",
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
  },
};