import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import axios from "axios";
import "../greyjoy.css"
const base_url = "https://www.anapioficeandfire.com/api/houses/169";

class House04 extends Component {
    constructor() {
        super();
        this.state = {
            info: [],
            kingTitles: [],
        };
    }

    async getHouseInfo() {
        try {
            const res = await axios.get(base_url);
            this.setState({ info: res.data });
            this.setState({ kingTitles: res.data.titles})
        
    } catch {
        console.log("error!!!")
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
                <h3>Region: {this.state.info.region}</h3>
                <h4>Lord Titles:</h4>
                <h5>{this.state.kingTitles[0]}</h5>
                <h5>{this.state.kingTitles[1]}</h5>
                <h5>{this.state.kingTitles[2]}</h5>

                <h3>Founded: {this.state.info.founded}</h3>
                
            </div>
        )
    }
}


export default House04