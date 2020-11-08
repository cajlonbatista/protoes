import React from 'react';

import {Route, Switch } from 'react-router-dom';
import Main from './pages/Main/Main';

export const Routes = () => {
    return(
        <Switch>
            <Route path='/' exact component={Main}></Route>
        </Switch>
    );
}