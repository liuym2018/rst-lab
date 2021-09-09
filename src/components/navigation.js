import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Search from './search';
import History from './history'

const Navigation = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Search} />
            <Route path='/search' component={Search} />
            <Route path='/history' component={History} />
        </Switch>
    </div>
)

export default Navigation;