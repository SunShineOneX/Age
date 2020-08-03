import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import Home from "./Home";
import Houses from "./Houses";
import Shop from "./Shop";
import Cart from "./Cart";
import House01 from "./House01";
import House02 from "./House02";
import House03 from "./House03";
import House04 from "./House04";
import House05 from "./House05";
import House06 from "./House06";
import House07 from "./House07";

class Navbar extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav class="navbar navbar-custom navbar-expand-lg navbar-light bg">
            <a class="navbar-brand" href="#">
              Age of Heroes
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="">
                    <Link to="/">
                      Home <span class="sr-only">(current)</span>
                    </Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <Link to="/shop">Shop</Link>
                  </a>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="">
                      <Link to="/houses">All Houses</Link>
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="">
                      <Link to="/houses/stark">House Stark</Link>
                    </a>
                    <a class="dropdown-item" href="">
                      <Link to="/houses/targaryen">House Targaryen</Link>
                    </a>
                    <a class="dropdown-item" href="">
                      <Link to="/houses/tyrell">House Tyrell</Link>
                    </a>
                    <a class="dropdown-item" href="">
                      <Link to="/houses/greyjoy">House Greyjoy</Link>
                    </a>
                    <a class="dropdown-item" href="">
                      <Link to="/houses/martell">House Martell</Link>
                    </a>
                    <a class="dropdown-item" href="">
                      <Link to="/houses/baratheon">House Baratheon</Link>
                    </a>
                    <a class="dropdown-item" href="">
                      <Link to="/houses/lannister">House Lannister</Link>
                    </a>
                  </div>
                </li>
                <li class="nav-item ml-auto">
                  <a class="nav-link " href="#">
                    <Link to="/cart">Cart</Link>
                  </a>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  class="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </nav>
          <Switch>
            <Route exact path="/" component={withRouter(Home)} />
            <Route exact path="/houses" component={withRouter(Houses)} />
            <Route path="/shop" component={withRouter(Shop)} />
            <Route path="/CART" component={withRouter(Cart)} />
            <Route path="/houses/stark" component={withRouter(House01)} />
            <Route path="/houses/targaryen" component={withRouter(House02)} />
            <Route path="/houses/tyrell" component={withRouter(House03)} />
            <Route path="/houses/greyjoy" component={withRouter(House04)} />
            <Route path="/houses/martell" component={withRouter(House05)} />
            <Route path="/houses/baratheon" component={withRouter(House06)} />
            <Route path="/houses/lannister" component={withRouter(House07)} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Navbar;
