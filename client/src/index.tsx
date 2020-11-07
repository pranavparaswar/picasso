import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, Switch } from 'react-router-dom';
import history from './helpers/history';
import './styles/index.css';
import Index from './views/index';
import SignIn from './views/signin';
import SignUp from './views/signup';


const App = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path='/' exact component={Index} />
                <Route path='/signup' exact component={SignUp} />
                <Route path='/signin' exact component={SignIn} />
            </Switch>
        </Router>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));