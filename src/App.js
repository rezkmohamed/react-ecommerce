import './App.css';
import React from 'react';
import { Route } from 'react-router';
import LandingPage from './components/pages/LandingPage';
import DetailProduct from './components/pages/DetailProduct';

const App = () => {
  return (
    <React.Fragment>
      <Route path="/" exact component={LandingPage} />
      <Route path="/detail" exact component={DetailProduct} />
    </React.Fragment>
  );
}

export default App;
