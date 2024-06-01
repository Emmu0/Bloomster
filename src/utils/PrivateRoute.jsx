/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, useHistory } from "react-router-dom";
import { PATHS } from "./index";

const PrivateRoute = ({ component: Component, roles, ...rest }) => {
  const history = useHistory();
  const { isAuth, nfRedirect } = useSelector((state) => state.collections);

  let query = "";
  if (window.location?.search.includes("?nl=") && !isAuth) {
    history.push({
      pathname: PATHS.LANDINGPAGE + "?nl=" + true,
      state: { NlPath: window.location?.pathname },
    });
    window.location.assign(PATHS.LANDINGPAGE + "?nl=" + true);
    return false;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? (
          <Component key="private-route-component" {...props} />
        ) : (
          <Redirect
            key="private-route-redirect"
            to={{
              pathname: PATHS.LANDINGPAGE + query,
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
