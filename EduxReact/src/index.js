import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './pages/login';
import Cadastrar from './pages/cadastrar';
import Dicas from './pages/dicas';
import Home from './pages/home';
import Curso from './pages/admin/curso';
import CursoList from './pages/curso';
import Dicascadastrar from './pages/admin/dicascadastrar';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


//Define as rotas da aplicação
const routing = ( 
    <Router >
        <div >
            <Switch >
                <Route exact path = '/' component = { Home }/>
                <Route path = '/login' component = { Login }/> 
                <Route path = '/cadastrar' component = { Cadastrar }/>
                <Route path = '/dicas' component = { Dicas }/>
                <Route path = '/admin/dicascadastrar' component = { Dicascadastrar }/> 
                <Route path = '/admin/curso' component = { Curso }/> 
                <Route path = '/curso' component = { CursoList }/> 
            </Switch >
        </div> 
    </Router>
)

ReactDOM.render(
    routing,
    document.getElementById('root')
);