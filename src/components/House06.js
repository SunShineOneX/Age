import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import axios from "axios";
import "../baratheon.css";
const base_url = "https://www.anapioficeandfire.com/api/houses/17";

class House06 extends Component {
    constructor() {
        super();
        this.state = {
            info: [],
        }
    }

    async getHouseInfo() {
        try {
            const res = await axios.get(base_url);
            this.setState({ info: res.data})
        } catch {
            console.log("error")
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
                <p className="baratheon-summary">House Baratheon of Storm's End is a Great House of Westeros. 
                    A cadet branch was formerly the royal house, but House Lannister took control of the throne, 
                    though lost it to House Targaryen. House Baratheon traditionally rules the Stormlands on the eastern 
                    coast of Westeros, aptly named for its frequent storms, from their seat of Storm's End.</p>
                    <h5 className="baratheon-quote"><strong><i>"Ours Is The Fury. These are the words of the black stag of Baratheon; a battle cry echoed throughout 
                        the land in rebellion when I, Robert Baratheon, the First of His Name seized the Iron Throne from the Mad King, 
                        Aerys Targaryen, ending a dynasty nearly three-hundred years old."</i></strong> ―Robert Baratheon</h5>
            </div>
        )
    }
}


export default House06