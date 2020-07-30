import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import axios from "axios";

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
            </div>
        )
    }
}


export default House06