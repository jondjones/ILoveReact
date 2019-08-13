import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom';

const PortfolioPage = (props) => {
    console.log(props);
    return (
        <div>
            Portfolio Items
            <Link to='/portfolio/1'>
                Item One
            </Link>
            <Link to='/portfolio/2'>
                Item Two
            </Link>
        </div>
    )
};

export default PortfolioPage