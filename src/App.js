import React from "react";
import TestComponent from "./TestComponent";
import classes from "./App.module.scss";

const App = () => {
  return (
    <div className={classes.layout}>
      <TestComponent />
    </div>
  );
};

export default App;
