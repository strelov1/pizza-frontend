import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

import 'element-theme-default';
import './index.css';


import HeadMenu from './components/HeadMenu'

const Home = lazy(() => import('./routes/Home'));
const Cart = lazy(() => import('./routes/Cart'));



const App = () => (
  <div className="app">
  <div className="main container">

    <div className="line bottom clearfix"></div>
      <Router>
        <HeadMenu/>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/cart" component={Cart}/>
          </Switch>
        </Suspense>
      </Router>
  </div>
  </div>
);

export default App;