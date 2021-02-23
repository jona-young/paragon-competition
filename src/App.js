import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import Header from './General/Header.js';
import Home from './General/Home.js';
import Footer from './General/Footer.js';
import './App.css';

function App() {
  return (
      <Router>
          <div className="App">
          <Header />
              <Switch>
                  <Route path="/about">
                      About Page
                  </Route>
                  <Route path="/">
                      <Home />
                  </Route>
              </Switch>
          <Footer />
          </div>

      </Router>

  );
}

export default App;
