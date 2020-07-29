import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import axios from "axios";
import Home from "./Home";
import Houses from "./Houses";
import House01 from "./House01";
import House02 from "./House01";
import House03 from "./House01";
import House04 from "./House01";
import House05 from "./House01";
import House06 from "./House01";
import House07 from "./House01";

 class Navbar extends Component {
    render() {
        return (
            <Router>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Age of Heroes</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#"><Link to="/">Home <span class="sr-only">(current)</span></Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Shop</a>
      </li>
      
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#"><Link to="Houses">All Houses</Link></a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#"><Link to="/Houses/Stark">House Stark</Link></a>
          <a class="dropdown-item" href="#"><Link to="/Houses/Targaryen">House Targaryen</Link></a>
          <a class="dropdown-item" href="#"><Link to="/Houses/Tyrell">House Tyrell</Link></a>
          <a class="dropdown-item" href="#"><Link to="/Houses/Greyjoy">House Greyjoy</Link></a>
          <a class="dropdown-item" href="#"><Link to="/Houses/Martell">House Martell</Link></a>
          <a class="dropdown-item" href="#"><Link to="/Houses/Baratheon">House Baratheon</Link></a>
          <a class="dropdown-item" href="#"><Link to="/Houses/Lannister">House Lannister</Link></a>
        </div>
        
      </li>
      <li class="nav-item ml-auto">
        <a class="nav-link " href="#">Cart</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
<Switch>
    <Route exact path ="/" component={Home} />
    <Route path ="/Houses" component={Houses} />
    <Route path ="/Houses/Stark" component={House01} />
    <Route path ="/Houses/Targaryen" component={House02} />
    <Route path ="/Houses/Tyrell" component={House03} />
    <Route path ="/Houses/Greyjoy" component={House04} />
    <Route path ="/Houses/Martell" component={House05} />
    <Route path ="/Houses/Baratheon" component={House06} />
    <Route path ="/Houses/Lannister" component={House07} />
</Switch>
            </div>
            </Router>
        )
    }
}

export default Navbar;