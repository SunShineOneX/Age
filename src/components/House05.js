import React, { Component } from "react";
import axios from "axios";
import "./martell.css";
const base_url = "https://www.anapioficeandfire.com/api/houses/285";

class House05 extends Component {
  constructor() {
    super();
    this.state = {
      info: [],
      currentLord: [],
      currentLordTitles: [],
      currentLordBorn: [],
      houseFounder: [],
    };
  }
  // Async call using await axios to get api info
  async getHouseInfo() {
    try {
      const res = await axios.get(base_url);
      const res2 = await axios.get(res.data.currentLord);
      const res3 = await axios.get(res.data.founder);
      this.setState({ info: res.data });
      this.setState({ currentLord: res2.data.name });
      this.setState({ currentLordTitles: res2.data.titles });
      this.setState({ currentLordBorn: res2.data.born });
      this.setState({ houseFounder: res3.data.name });
    } catch {
      console.log("error");
    }
  }

  componentDidMount() {
    this.getHouseInfo();
  }

  render() {
    return (
      <div className="martell">
        <img
          className="martell-logo"
          src={require("../assets/martell01.jpg")}
        />
        <h1>{this.state.info.name}</h1>
        <h2>{this.state.info.words}</h2>
        <h2>Region: {this.state.info.region}</h2>
        <p className="martell-summary">
          House Martell of Sunspear is one of the Great Houses of Westeros. It
          rules the peninsula of Dorne in the far south of the continent from
          their castle Sunspear. Though loyal to the Iron Throne, the Martells
          were never conquered by the Targaryens and pursued a more isolated
          role in wider political events since Robert's Rebellion.
        </p>
        <h5 className="martell-quote">
          <strong>
            <i>
              "'Unbowed, unbent, unbroken'. The words of House Martell. A
              promise to our enemies, and a challenge to our lovers."
            </i>
          </strong>
          ―Oberyn Martell
        </h5>
        <h4>
          Founded: {this.state.info.founded} by {this.state.houseFounder}
        </h4>
        <h4>Current Lord: {this.state.currentLord}</h4>
        <h6>Born: {this.state.currentLordBorn}</h6>
        <h5>Titles:</h5>
        <h6>{this.state.currentLordTitles[0]}</h6>
      </div>
    );
  }
}

export default House05;
