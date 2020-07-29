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
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Shop</a>
      </li>
      
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">All Houses</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#"><Link to="Houses/Stark">House Stark</Link></a>
          <a class="dropdown-item" href="#"><Link to="Houses/Targaryen">House Targaryen</Link></a>
          <a class="dropdown-item" href="#"><Link to="Houses/Tyrell">House Tyrell</Link></a>
          <a class="dropdown-item" href="#"><Link to="Houses/Greyjoy">House Greyjoy</Link></a>
          <a class="dropdown-item" href="#"><Link to="Houses/Martell">House Martell</Link></a>
          <a class="dropdown-item" href="#"><Link to="Houses/Baratheon">House Baratheon</Link></a>
          <a class="dropdown-item" href="#"><Link to="Houses/Lannister">House Lannister</Link></a>
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
    <Route path ="/Houses/HouseStark" component={House01} />
    <Route path ="/Houses/HouseTargaryen" component={House02} />
    
</Switch>
            </div>
            </Router>
        )
    }
}

export default Navbar;