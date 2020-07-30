import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import axios from "axios";
import "../greyjoy.css";
const base_url = "https://www.anapioficeandfire.com/api/houses/169";

class House04 extends Component {
  constructor() {
    super();
    this.state = {
      info: [],
      kingTitles: [],
      currentLord: [],
      currentLordTitles: [],
    };
  }

  async getHouseInfo() {
    try {
      const res = await axios.get(base_url);
      const res2 = await axios.get(res.data.currentLord);
      this.setState({ info: res.data });
      this.setState({ kingTitles: res.data.titles });
      this.setState({ currentLord: res2.data });
      this.setState({ currentLordTitles: res2.data.titles });
    } catch {
      console.log("error!!!");
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
        <p className="greyjoy-summary">
          House Greyjoy of Pyke is one of the Great Houses of Westeros. It rules
          over the Iron Islands, a harsh and bleak collection of islands off the
          west coast of Westeros, from the castle at Pyke. The head of the house
          is the Lord Reaper of Pyke.
        </p>

        <h6><strong><i>
          "We are ironborn. We're not subjects, we're not slaves. We do not plow
          the field or toil in the mine. We take what is ours." ―Balon Greyjoy
          </i></strong>
        </h6>
        <h3>Region: {this.state.info.region}</h3>
        <h3>Current Lord: {this.state.currentLord.name}</h3>
        <h4>Born: {this.state.currentLord.born}</h4>
        <h4>Lord Titles:</h4>
        <h5>{this.state.currentLordTitles[0]},</h5>
        <h5>{this.state.currentLordTitles[1]},</h5>
        <h5>{this.state.currentLordTitles[2]},</h5>
        <h5>{this.state.currentLordTitles[3]},</h5>
        <h5>{this.state.currentLordTitles[4]}</h5>

        <h3>Founded: {this.state.info.founded}</h3>
      </div>
    );
  }
}

export default House04;
