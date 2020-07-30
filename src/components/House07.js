import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import axios from "axios";
import "../lannister.css";
const base_url = "https://www.anapioficeandfire.com/api/houses/229";

class House07 extends Component {
    constructor() {
        super();
        this.state = {
            info: [],
            currentLord: [],
            currentLordTitles: [],
        };
    }

    async getHouseInfo() {
        try {
            const res = await axios.get(base_url);
            const res2 = await axios.get(res.data.currentLord);
            this.setState({ info: res.data});
            this.setState({ currentLord: res2.data});
            this.setState({ currentLordTitles: res2.data.titles})
        } catch {

        }
    }

    componentDidMount() {
        this.getHouseInfo()
    }
    render() {
        return (
            <div>
                <h1>{this.state.info.name}</h1>
                <h3>"{this.state.info.words}"</h3>
                <p className="lannister-summary">House Lannister of Casterly Rock is one of the Great Houses of Westeros, 
                    one of its richest and most powerful families and one of its oldest dynasties. It was also the royal house of the 
                    Seven Kingdoms following the extinction of House Baratheon of King's Landing, which had been their puppet house 
                    during the War of the Five Kings, for a brief stint of time until House Targaryen took back the Iron 
                    Throne in Daenerys Targaryen's war for Westeros.</p>
                <h5 className="lannister-quote"><strong><i>"You have to give it to the Lannisters – they may be the most pompous, ponderous cunts the gods ever suffered 
                    to walk the world, but they do have outrageous amounts of money."</i></strong> ―Renly Baratheon</h5>
                    <h3>Region: {this.state.info.region}</h3>
                    <h4>Founded during the {this.state.info.founded}</h4>
                <h4>Ancestral Weapons: {this.state.info.ancestralWeapons}</h4>

                <h4>Current Lord: {this.state.currentLord.name}</h4>
                <j4>Born {this.state.currentLord.born}</j4>
                <h4>Titles: </h4>
                <h5>{this.state.currentLordTitles[0]},</h5>
                <h5>{this.state.currentLordTitles[1]},</h5>
                <h5>{this.state.currentLordTitles[2]},</h5>
                <h5>{this.state.currentLordTitles[3]},</h5>
                <h5>{this.state.currentLordTitles[4]}</h5>
            </div>
        )
    }
}


export default House07