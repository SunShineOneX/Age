import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import axios from "axios";
import "../tyrell.css";
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
            const res2 = await axios.get(res.data.currentLord)
            this.setState({ info: res.data})
            this.setState({ titles: res.data.titles})
            this.setState({ currentLord: res2.data})
            this.setState({ lordAliases: res2.data.titles})

        } catch {
            console.log("error");
        }
    }

    componentDidMount() {
        this.getHouseInfo()
    }

    render() {
        return (
            <div>
                <h1>{this.state.info.name}</h1>
                <h2>House Words: {this.state.info.words}</h2>
                <h2>Region: {this.state.info.region}</h2>
                <h4>Titles:</h4>
                <h5>{this.state.titles[0]}</h5>
                <h5>{this.state.titles[1]}</h5>
                <h5>{this.state.titles[2]}</h5>
                <h5>{this.state.titles[3]}</h5>
                <h5>{this.state.titles[4]}</h5>
                <h5>{this.state.titles[5]}</h5>
                <h5>Current Lord: {this.state.currentLord.name}</h5>
                <h5>Born: {this.state.currentLord.born}</h5>
                <h5>Titles: {this.state.lordAliases[0]}</h5>
                <h5>Titles: {this.state.lordAliases[1]}</h5>
                <h5>Titles: {this.state.lordAliases[2]}</h5>
                <h5>Titles: {this.state.lordAliases[3]}</h5>
                <h5>Titles: {this.state.lordAliases[4]}</h5>
                

            </div>
        )
    }
}


export default House03