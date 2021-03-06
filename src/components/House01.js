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
      lordTitles: [],
      founder: [],
    };
  }
  // Async call using await axios to get api info
  async getHouseInfo() {
    try {
      const res = await axios.get(API_CALL);
      const res2 = await axios.get(res.data.cadetBranches[0]);
      const res3 = await axios.get(res.data.cadetBranches[1]);
      const res4 = await axios.get(res.data.founder);
      this.setState({ info: res.data });
      this.setState({ cadetBranch1: res2.data.name });
      this.setState({ cadetBranch2: res3.data.name });
      this.setState({ lordTitles: res.data.titles });
      this.setState({ founder: res4.data.name });
    } catch {
      // in case there is an error this will let me know
      console.log("error my guy!");
    }
  }

  // if successful run my async function
  componentDidMount() {
    this.getHouseInfo();
  }


  render() {
    return (
      <div className="stark">
        <img className="stark-logo" src={require("../assets/stark01.jpg")} />
        <h1>{this.state.info.name}</h1>
        <h2>"{this.state.info.words}"</h2>
        <p className="stark-summary">
          <strong>
            <i>
              House Stark of Winterfell is a Great House of Westeros and the
              royal house of the Kingdom of the North. They rule over the vast
              region known as the North from their seat in Winterfell. It is one
              of the oldest lines of Westerosi nobility by far, claiming a line
              of descent stretching back over eight thousand years. Before the
              Targaryen conquest, as well as during the War of the Five Kings
              and early on in Daenerys Targaryen's war for Westeros, the leaders
              of House Stark ruled over the region as the Kings in the North.
            </i>
          </strong>
        </p>
        <h5 className="stark-quote">
          <strong>
            <i>
              "When the snow falls and the white winds blow, the lone wolf dies
              but the pack survives." - Eddard Stark
            </i>
          </strong>
        </h5>
        <h3>House stark ruling titles: </h3>
        <h4>{this.state.lordTitles[0]},</h4>
        <h4>{this.state.lordTitles[1]},</h4>
        <h4>{this.state.lordTitles[2]},</h4>
        <h4>{this.state.lordTitles[3]},</h4>
        <br></br>
        <h2>Region: {this.state.info.region}</h2>
        <h4>Cadet houses: {this.state.cadetBranch1}</h4>
        <h4>{this.state.cadetBranch2}</h4>
        <br></br>
        <h5>Founded during the {this.state.info.founded} by</h5>
        <h5>{this.state.founder}</h5>
      </div>
    );
  }
}

export default House01;
