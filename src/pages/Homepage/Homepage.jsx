import React from 'react';

import "../../App.scss";
import "./Homepage.scss";

import Title from "../../components/Title/Title";
import Search from "../../components/Search/Search";

const Homepage = () => {
    return (
        <div className="Homepage">
            <Title title={"Urban Dicitionary"} subtitle={"Find unconventional definitions for every word."} />
            <Search />
        </div>
    )
}

export default Homepage;