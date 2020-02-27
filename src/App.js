import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { Loading } from 'element-react';

import 'element-theme-default';
import './index.css';


import HeadMenu from './components/HeadMenu'

const Home = lazy(() => import('./routes/Home'));
const Cart = lazy(() => import('./routes/Cart'));


const App = () => (
  <div className="app">
    <div className="line bottom clearfix"></div>
      <Router>
          <HeadMenu/>
        <div className="main container">
            <Suspense fallback={<Loading fullscreen={true}/>}>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/cart" component={Cart}/>
              </Switch>
            </Suspense>
        </div>
      </Router>
  </div>
);

export default App;