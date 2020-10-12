import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './components/Landing';
import OrphanagesMap from './components/OrphanagesMap';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/orfanatos" exact component={OrphanagesMap} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;