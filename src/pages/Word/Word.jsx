import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import { fetchData } from "../../fetchData";

import "../../App.scss";
import "./Word.scss";

import Header from "../../components/Header/Header";

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const Word = () => {
    const { query } = useParams();
    const [data, setData] = useState([]);
    const [result, setResult] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const definitions = await fetchData(query);
            setData(definitions.list);
            if(definitions.list.length < 1) {
                setResult(false);
            }
        }
    
        getData();
    }, [query]);

    return (
        <div className="Word">
            <Header />
            <h4 className="title2">Results for:</h4>
            <h1 className="title1">{query}</h1>
            {data.length > 0 
                ? data.map((definition, i) => {
                    return (
                        <div className="Word__definition" key={i}>
                            <p><strong>{i}.</strong> {definition.definition}</p>
                            <div className="Word__votes">
                                <div className="Word__votesGroup">
                                    {definition.thumbs_up} 
                                    <ThumbUpIcon style={{ fontSize: "19px", fill: "#183EFA" }} /> 
                                </div>
                                <div className="Word__votesGroup">
                                    {definition.thumbs_down} 
                                    <ThumbDownIcon style={{ fontSize: "19px", fill: "#183EFA" }} /> 
                                </div>
                            </div>
                        </div>
                    )
                })
                : <div className="Word__definition">
                    <p>{result ? "Loading definitions..." : "There are no results for your search."}</p>
                </div>
            }
        </div>
    )
}

export default Word;