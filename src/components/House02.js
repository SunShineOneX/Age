import React, { Component } from "react";
import axios from "axios";
import "./targaryen.css";
const api_call = "https://www.anapioficeandfire.com/api/houses/378";

class House02 extends Component {
  constructor() {
    super();
    this.state = {
      info: [],
      cadetBranches: [],
      titles: [],
      currentLord: [],
      lordTitles: [],
    };
  }

  // Async call using await axios to get api info
  async getHouseInfo() {
    try {
      const res = await axios.get(api_call);
      const res2 = await axios.get(res.data.cadetBranches);
      const res3 = await axios.get(res.data.currentLord);

      this.setState({ info: res.data });
      this.setState({ titles: res.data.titles });
      this.setState({ cadetBranches: res2.data.name });
      this.setState({ currentLord: res3.data });
      this.setState({ lordTitles: res3.data.titles });
    } catch {
      console.log("error");
    }
  }
  componentDidMount() {
    this.getHouseInfo();
  }

  render() {
    return (
      <div className="targaryen">
        <img
          className="targaryen-logo"
          src={require("../assets/targaryen01.jpg")}
        />
        <h1>{this.state.info.name}</h1>
        <h2>{this.state.info.words}</h2>
        <p className="targaryen-summary">
          House Targaryen of Dragonstone is an exiled Great House of Westeros
          and the former royal house of the Seven Kingdoms. House Targaryen
          conquered and unified the realm before it was deposed during Robert's
          Rebellion and House Baratheon replaced it as the new royal House. The
          two surviving Targaryens, Viserys and Daenerys, fled into exile to the
          Free Cities of Essos across the Narrow Sea. House Lannister replaced
          House Baratheon as the royal House following the destruction of the
          Great Sept of Baelor, but the realm was reconquered by Daenerys
          Targaryen, retaking the Iron Throne following the Battle of King's
          Landing. After she laid waste to a surrendered King's Landing,
          Daenerys was assassinated by Jon Snow to prevent further destruction.
          Jon became the last known living member of House Targaryen and his
          identity as the son of Rhaegar Targaryen is kept hidden from Westeros.
          He is exiled to the Night's Watch for the assassination of Daenerys.
          The bloodline of House Targaryen also still exists in various houses,
          such as House Baratheon, House Velaryon, and House Martell.
        </p>
        <h5 className="targaryen-quote">
          <strong>
            <i>
              "Half the Targaryens went mad, didn't they? What's the saying?
              'Every time a Targaryen is born the gods flip a coin.'" ―Cersei
              Lannister to Tyrion Lannister
            </i>
          </strong>
        </h5>
        <div className="house02__container">
          <h3>Region: {this.state.info.region}</h3>
          <h3>Titles: {this.state.titles[0]}</h3>
          <h3>Founded: {this.state.info.founded}</h3>
          <h4>Ancestral Weapons: {this.state.ancestralWeapons}</h4>
          <h4>Cadet Branch: {this.state.cadetBranches}</h4>

          {/* Seperate card */}

          <h5>Current Lord: {this.state.currentLord.name}</h5>
          <h5>Titles: {this.state.lordTitles[0]}</h5>
          <h5>{this.state.lordTitles[1]}</h5>
          <h5>{this.state.lordTitles[2]}</h5>
          <h5>{this.state.lordTitles[3]}</h5>
          <h5>{this.state.lordTitles[4]}</h5>
          <h5>Born: {this.state.currentLord.born}</h5>
        </div>
      </div>
    );
  }
}

export default House02;
