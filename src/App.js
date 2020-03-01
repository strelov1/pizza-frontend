import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { Loading } from 'element-react';

import 'element-theme-default';
import './index.css';


import HeadMenu from './components/HeadMenu'
import { StateProvider } from './GlabalStateProvider'
import { Flash } from './components/Flash';

const Home = lazy(() => import('./routes/Home'));
const Cart = lazy(() => import('./routes/Cart'));
const Order = lazy(() => import('./routes/Order'));
const History = lazy(() => import('./routes/History'));


const App = () => (
  <div className="app">
    <div className="line bottom clearfix"></div>
    <StateProvider>
      <Router>
        <HeadMenu/>
        
        <div className="main container">
          <Flash/>
        </div>
        <div className="main container">
            <Suspense fallback={<Loading fullscreen={true}/>}>
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/cart" component={Cart}/>
                  <Route exact path="/order" component={Order}/>
                  <Route exact path="/history" component={History}/>
              </Switch>
            </Suspense>
        </div>
      </Router>

      </StateProvider>
  </div>
);

export default App;