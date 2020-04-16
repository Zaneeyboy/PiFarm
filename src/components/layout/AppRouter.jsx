import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../../Home";
import Dashboard from "../../Dashboard";
import Header from "./Header";
import NotFoundPage from "./NotFoundPage";


export default function AppRouter() {
    return (
      <BrowserRouter basename="/">
        <Header/>
        <main>
            <Switch>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/Dashboard" component={Dashboard}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </main>
      </BrowserRouter>
    );
}
