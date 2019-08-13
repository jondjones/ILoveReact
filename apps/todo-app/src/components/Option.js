import React from 'react';

const Option = (props) => (
        <li className="option">
            <p className="option__text">
                {props.count}. {props.optiondetail}
            </p>
            <button 
                onClick={() => props.handleDeleteOption(props.optiondetail)}
                className="button button--link"
            >
                Done
            </button>
        </li>
    );

export default Option;