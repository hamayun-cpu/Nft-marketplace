import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import About from './about';
import Home from './home';
import Product from './product';
import NftState from './nftState';

function App() {
  return (
    <Router>
      <>
        <nav className="navbar navbar-light bg-light justify-content-between sticky">
          <div className="navbar-brand">
            <Link to="/" className="mr-3 color-black">Home</Link>
            <Link to="/about" className="mr-3 color-black">About</Link>
            <Link to="/nftState" className="mr-3 color-black">Sale/Bid</Link>
          </div>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Connect Wallet</button>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/product/:id">
            <Product />
          </Route>
          <Route path="/nftState">
            <NftState />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </>
    </Router>

  );
}

export default App;
