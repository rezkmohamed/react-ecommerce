import './App.css';
import React from 'react';
import { Route } from 'react-router';
import LandingPage from './components/pages/LandingPage';
import DetailProduct from './components/pages/DetailProduct';
import Login from './components/pages/auth/Login';
import Register from './components/pages/auth/Register';
import AddNewProduct from './components/pages/AddNewProduct';
import { Provider } from 'react-redux';
import store from './services/index-redux';
import CartPage from './components/pages/CartPage';

const App = () => {
  return (
    <React.Fragment>
      <Provider store={store}> 
        <Route path="/" exact component={LandingPage} />
        <Route path="/detail" exact component={DetailProduct} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/newprod" exact component={AddNewProduct} />
        <Route path="/cart" exact component={CartPage} />
      </Provider>
    </React.Fragment>
  );
}

export default App;
