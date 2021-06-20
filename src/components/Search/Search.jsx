import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import "../../App.scss";
import "./Search.scss";

import SearchIcon from '@material-ui/icons/Search';

const Search = () => {
    let history = useHistory();

    const [input, setInput] = useState("");
    const [searches, setSearches] = useState([]);

    const onChangeHandler = (e) => {
        setInput(e.target.value);
    }

    const onKeyUpHandler = (e) => {
        if(e.keyCode === 13) {
            let data = [...searches.reverse(), e.target.value];
            localStorage.setItem("searches", JSON.stringify(data));
            history.push(`/${input}`);
        }
    }

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("searches"));
        if(data) {
            setSearches(...searches, data.reverse().slice(0, 10));
        }
    }, [])

    return (
        <div className="Search">
            <div className="SearchInput">
                <SearchIcon style={{ fill: "#8f8f8f" }} />
                <input type="text" placeholder="Search here" value={input} onChange={onChangeHandler} onKeyUp={onKeyUpHandler} />
            </div>
            <div className="RecentSearches">
                <h6 className="title2">Recent</h6>
                <ul>
                    {searches.length > 0 
                        ? searches.map((search, i) => {
                            return ( 
                                <li key={i}>{search}</li>
                            )
                        }) 
                        : <li>You have no search history.</li>
                    }
                </ul>
            </div>
        </div>
    )
}

export default Search;