import './App.css';
import Footer from './components/UI/Footer';
import Header from './components/UI/Header';
import React from 'react';
import { Route } from 'react-router';
import LandingPage from './components/pages/LandingPage';

const App = () => {
  return (
    <React.Fragment>
      <Route path="/" exact component={LandingPage} />
    </React.Fragment>
  );
}

export default App;
