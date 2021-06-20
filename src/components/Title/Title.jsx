import React from 'react';

import "../../App.scss";

const Title = ({ title, subtitle }) => {
    return (
        <div className="Title">
            <h1 className="title1">{title}</h1>
            <p>{subtitle ? subtitle : null}</p>
        </div>
    )
}

export default Title;
