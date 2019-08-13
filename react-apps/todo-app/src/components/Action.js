import React from 'react'

const Action = (props) => (
        <button
            className="big-button"
            onClick={props.handlepick}
            disabled={!props.hasoptions}
        >
            Pick My Next Task
        </button>);

export default Action;