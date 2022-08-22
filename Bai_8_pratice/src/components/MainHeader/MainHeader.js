import React, { useContext } from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";
import AuthContext from "../store/auth-context";

const MainHeader = (props) => {
  const authCtx = useContext(AuthContext);
  return (
    <header className={classes["main-header"]}>
      <h1>A Typical Page</h1>
      <Navigation onLogout={authCtx.onLogout} />
    </header>
  );
};

export default MainHeader;
