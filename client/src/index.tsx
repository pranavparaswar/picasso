import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, Switch } from 'react-router-dom';
import history from './helpers/history';

import Index from './views/index';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path='/' exact component={Index} />
            </Switch>
        </Router>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));