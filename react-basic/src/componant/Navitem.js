import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import "./Navigator.css"

class Navitems extends Component {
    render() {
        return (
            <li id={this.props.item}>
                <Link to={this.props.tolink}>{this.props.item}</Link>
            </li>
        );
    }
}

export default Navitems;