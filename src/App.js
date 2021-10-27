import './App.css';
import React from 'react';
import { Route } from 'react-router';
import LandingPage from './components/pages/LandingPage';
import DetailProduct from './components/pages/DetailProduct';
import Login from './components/pages/auth/Login';

const App = () => {
  return (
    <React.Fragment>
      <Route path="/" exact component={LandingPage} />
      <Route path="/detail" exact component={DetailProduct} />
      <Route path="/login" exact component={Login} />
    </React.Fragment>
  );
}

export default App;
