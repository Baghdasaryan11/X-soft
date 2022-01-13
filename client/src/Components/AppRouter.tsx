import React from "react";
import {Redirect, Route,Switch} from 'react-router'
import Main from "../Pages/Main";

const AppRouter = () => {

    return(
        

        <Switch>
            <Route path="/" component={Main} exact/>
            <Redirect to="/"/>
        </Switch>
          
    )
};

export default AppRouter;

