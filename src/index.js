import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

import MovieDetail from './pages/MovieDetails/index.js';
import MoviesLists from './pages/MoviesLists/index.js';


//Montar uma pagina legal para o 404 dps
const Pagina404 = () => (<div>Página 404</div>)


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/movie/detail/:id" component={MovieDetail} />
      <Route path="/movie/lists/:list" component={MoviesLists} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('conteudo')
);