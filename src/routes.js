import React from 'react';

import {Route, Switch } from 'react-router-dom';
import Main from './pages/Main/Main';
import Add from './pages/Add/Add';

export const Routes = () => {
    return(
        <Switch>
            <Route path='/' exact component={Main}></Route>
            <Route path='/add' exact component={Add}></Route>
        </Switch>
    );
}