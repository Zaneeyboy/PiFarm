import React,{useContext} from 'react';
import {AuthContext} from "../../config/Auth";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const {currentUser} = useContext(AuthContext);
  return (
      <>
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/Login"} />
        )
      }
    />
    </>
  );
};


export default PrivateRoute
