import React, { Component } from "react";
import axios from "axios";
import "./stark.css";
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
      <div className="stark">
          <img className = "stark-logo" src={require("../assets/stark01.jpg")} />
        <h1>{this.state.info.name}</h1>
        <h2>"{this.state.info.words}"</h2>
        <p>House Stark of Winterfell is a Great House of Westeros and the royal house of the Kingdom of the North. They rule over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and early on in Daenerys Targaryen's war for Westeros, the leaders of House Stark ruled over the region as the Kings in the North.</p>
        <h2>Region: {this.state.info.region}</h2>
        <h4>Cadet houses {this.state.cadetBranch1}</h4>
        <h4>{this.state.cadetBranch2}</h4>
        <h5>Founded during the {this.state.info.founded}</h5>
        
      </div>
    );
  }
}

export default House01;
