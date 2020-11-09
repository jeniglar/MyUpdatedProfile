import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './utils/Home';
import Portfolio from './utils/Portfolio';
import CreateNav from './components/Nav';
import CreateFooter from './components/Footer';

function App() {
  return (
    <>
    <CreateNav />
    <CreateFooter />
      <Router>
          <Route exact path="/" component={ Home } />
          <Route exact path="/Home" component={ Home } />
          <Route exact path="/Portfolio" component={ Portfolio } />
      </Router>
    </>
  );
}

export default App;