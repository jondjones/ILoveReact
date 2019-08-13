import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom';

const PortfolioDetailsPage = (props) => {
    console.log(props);
    return (
        <div>
            Project {props.match.params.id}
        </div>
    )
};

export default PortfolioDetailsPage