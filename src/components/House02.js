import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import axios from "axios";
import "../targaryen.css";
const api_call = "https://www.anapioficeandfire.com/api/houses/378";

class House02 extends Component {
    constructor() {
        super();
        this.state = {
            info: [],
            cadetBranches: [],
            titles:  [],
            currentLord: [],
        };
    }

    async getHouseInfo() {
        try {
            const res = await axios.get(api_call);
            const res2 = await axios.get(res.data.cadetBranches);
            const res3 = await axios.get(res.data.currentLord);
            
            this.setState({ info: res.data})
            this.setState({ titles: res.data.titles})
            this.setState({ cadetBranches: res2.data.name })
           
        
    } catch {
        console.log("error");
    }
}
    componentDidMount() {
        this.getHouseInfo();
    }

    render() {
        return (
            <div>
                <h1>{this.state.info.name}</h1>
                <h2>{this.state.info.words}</h2>
                <h3>Region: {this.state.info.region}</h3>
                <h3>Titles: {this.state.titles[0]}</h3>
                <h3>Founded: {this.state.info.founded}</h3>
                <h4>Ancestral Weapons: {this.state.ancestralWeapons}</h4>
                <h4>Cadet Branch: {this.state.cadetBranches}</h4>
            </div>
        )
    }
}


export default House02;