import React from "react";
import TestComponent from "./TestComponent";
import classes from "./App.module.scss";

const App = ({ classes }) => {
  return (
    <div className={classes.layout}>
      <TestComponent />
    </div>
  );
};

App.defaultProps = {
  classes,
};

export default App;
