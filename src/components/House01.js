import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import axios from "axios";
const API_CALL = "https://www.anapioficeandfire.com/api/houses/362";

class House01 extends Component {
  constructor() {
    super();
    this.state = {
      info: [],
      cadetBranch1: [],
      cadetBranch2: [],
    };
  }

  async getHouseInfo() {
    try {
      const res = await axios.get(API_CALL);
      const res2 = await axios.get(res.data.cadetBranches[0])
      const res3 = await axios.get(res.data.cadetBranches[1])
      this.setState({ info: res.data });
      this.setState({ cadetBranch1: res2.data.name});
      this.setState({ cadetBranch2: res3.data.name});
      console.log(res2);
    } catch {
      console.log("error my guy!");
    }
  }

  componentDidMount() {
      this.getHouseInfo();
  }

  render() {
    return (
      <div>
        <h1>{this.state.info.name}</h1>
        <h2>"{this.state.info.words}"</h2>
        <h3>{this.state.info.region}</h3>
        <h4>Cadet houses {this.state.cadetBranch1}</h4>
        <h4>{this.state.cadetBranch2}</h4>
        
      </div>
    );
  }
}

export default House01;
