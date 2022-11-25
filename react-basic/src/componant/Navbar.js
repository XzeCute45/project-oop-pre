import React from 'react'
import Navitems from './Navitem.js'
import { RiReactjsLine } from 'react-icons/ri';
//import './Navigator.css';

function Navbar() {
    return (
        <nav>
            <ul>
                <div className="App-logo">
                    <RiReactjsLine />
                </div>
                <Navitems item="Home" tolink="/"></Navitems>
                <Navitems item="DCM viewer" tolink="/image"></Navitems>
                <Navitems item="train_study_level.csv" tolink="/trainstudy"></Navitems>
                <Navitems item="sample_submission.csv" tolink="/samplesub"></Navitems>
                <Navitems item="train_image_level.csv" tolink="/trainimage"></Navitems>
            </ul>
        </nav>
    );
}

export default Navbar;