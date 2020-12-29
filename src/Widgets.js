import React from 'react'
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Linkedin News</h2>
                <InfoIcon />
            </div>
            {newsArticle("PAPA React is back", "Top news - 9099 readers")}
            {newsArticle("Kev.in.tech starting Youtube Channel", "Top news - 10k readers")}
            {newsArticle("Coronavirus Updates", "Top news - 808 readers")}
            {newsArticle("Tesla hits new highs!", "Top news - 808 readers")}
        </div>

    )
}

export default Widgets
