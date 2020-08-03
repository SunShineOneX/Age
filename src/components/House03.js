import React, { Component } from 'react'
import axios from "axios";
import "./tyrell.css";
const base_url = "https://www.anapioficeandfire.com/api/houses/398"

class House03 extends Component {
    constructor() {
        super();
        this.state= {
            info: [],
            titles: [],
            currentLord: [],
            founder: [],
            cadetBranches: [],
            lordAliases: [],
        }
    }

    async getHouseInfo() {
        try {
            const res = await axios.get(base_url);
            const res2 = await axios.get(res.data.currentLord);
            const res3 = await axios.get(res.data.cadetBranches);
            const res4 = await axios.get(res.data.founder);

            this.setState({ info: res.data})
            this.setState({ titles: res.data.titles})
            this.setState({ currentLord: res2.data})
            this.setState({ lordAliases: res2.data.titles})
            this.setState({ cadetBranches: res3.data})
            this.setState({ founder: res4.data})
        } catch {
            console.log("error");
        }
    }

    componentDidMount() {
        this.getHouseInfo()
    }

    render() {
        return (
            <div className="tyrell">
                <img className = "tyrell-logo" src={require("../assets/tyrell01.jpg")} />
                <h1>{this.state.info.name}</h1>
                <h2>House Words: {this.state.info.words}</h2>
                <p className="tyrell-summary">House Tyrell of Highgarden is an extinct Great House of Westeros. It ruled over the Reach, a vast, fertile, 
                    and heavily-populated region of southwestern Westeros, from their castle-seat of Highgarden as Lords Paramount of the Reach
                     and Wardens of the South after taking control of the region from House Gardener during the Targaryen conquest.</p>
                <h5 className="tyrell-quote"><strong><i>""Growing Strong." Ha! The dullest words of any House.""</i></strong>
                ―Olenna Tyrell
                </h5>
                <h2>Region: {this.state.info.region}</h2>
                <h2>Founder: {this.state.founder.name}</h2>
                <h4>Current Lord: {this.state.currentLord.name}</h4>
                <h4>Born: {this.state.currentLord.born}</h4>
                <h4>Titles:</h4>
                <h5>{this.state.lordAliases[0]}</h5>
                <h5>{this.state.lordAliases[1]}</h5>
                <h5>{this.state.lordAliases[2]}</h5>
                <h5>{this.state.lordAliases[3]}</h5>
                <h5>{this.state.lordAliases[4]}</h5>
                <h3>Cadet Branch: </h3>
                <h4>{this.state.cadetBranches.name}</h4>
                

            </div>
        )
    }
}


export default House03