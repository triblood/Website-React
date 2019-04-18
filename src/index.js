import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import Sobre from './Sobre';
import Header from './components/header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/sobre" component={Sobre} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
