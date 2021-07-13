import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from './about';
import Home from './home';
import Product from './product';
import Update from './update';

function App() {
  return (
    <Router>
      <div>
        <nav class="navbar navbar-light bg-light justify-content-between sticky">
          <div class="navbar-brand">
            <Link to="/" class="mr-3 color-black">Home</Link>
            <Link to="/about" class="mr-3 color-black">About</Link>
            <Link to="/update" class="mr-3 color-black">Sale/Bid</Link>
          </div>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Connect Wallet</button>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/product/:id">
            <Product />
          </Route>
          <Route path="/update">
            <Update />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
