import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './utils/Home';
import Portfolio from './utils/Portfolio';
import CreateNav from './components/Nav';

function App() {
  return (
    <>
    <CreateNav />
    <Footer />
      <Router>

          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
      
      </Router>
    </>
  );
}

export default App;