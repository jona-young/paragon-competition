import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import Header from './General/Header.js';
import Footer from './General/Footer.js';
import Home from './General/Home.js';
import About from './General/About.js';
import Contact from './General/Contact.js';
import './App.css';

function App() {
  return (
      <Router>
          <div className="App">
          <Header />
              <Switch>
                  <Route path="/about">
                      <About />
                  </Route>
                  <Route path="/contact">
                      <Contact />
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
