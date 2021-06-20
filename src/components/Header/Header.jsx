import React from 'react';
import { Link } from "react-router-dom";

import "../../App.scss";
import "./Header.scss";

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Header = () => {
    return (
        <div className="Header">
            <Link to="/" >
                <ArrowBackIosIcon style={{ fill: "#183EFA" }} />
            </Link>
        </div>
    )
}

export default Header;