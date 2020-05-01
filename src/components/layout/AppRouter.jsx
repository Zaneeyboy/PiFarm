import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../../Home";
import Dashboard from "../../Dashboard";
import Header from "./Header";
import NotFoundPage from "./NotFoundPage";
import LoginPage from "./Login";
import LogoutPage from "./Logout";
import RegisterPage from "./Register";
import {AuthProvider} from "../../config/Auth";
import PrivateRoute from "./PrivateRoute";

export default function AppRouter() {
    return (
      <AuthProvider>
        <BrowserRouter basename="/">
          <Header/>
          <main>
              <Switch>
                  <Route path="/PiFarm"  component={Home}/>
                  <PrivateRoute exact path="/Dashboard" component={Dashboard}/>
                  <Route path="/Login" component={LoginPage}/>
                  <Route path="/Logout" component={LogoutPage}/>
                  <Route path="/Register" component={RegisterPage}/>
                  <Route component={NotFoundPage}/>
              </Switch>
          </main>
        </BrowserRouter>
      </AuthProvider>
      
    );
}
