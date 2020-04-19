import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../../Home";
import Dashboard from "../../Dashboard";
import Header from "./Header";
import NotFoundPage from "./NotFoundPage";
import LoginPage from "./Login";
import LogoutPage from "./Logout";


export default function AppRouter() {
    return (
      <BrowserRouter basename="/">
        <Header/>
        <main>
            <Switch>
                <Route path="/PiFarm"  component={Home}/>
                <Route path="/Dashboard" component={Dashboard}/>
                <Route path="/Login" component={LoginPage}/>
                <Route path="/Logout" component={LogoutPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </main>
      </BrowserRouter>
    );
}
