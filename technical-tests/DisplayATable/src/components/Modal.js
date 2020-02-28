import React, { Fragment, useState } from 'react';
import styled from "styled-components";

const Display = styled.div`
    width: 60vw;
    height: 60vh;
    background-color: #adadad;
    text-align: center;
    padding-top: 5%;
    margin: auto auto;
    margin-top: 10vh;
`

function Modal(props) {
    const [showThisInstance, setshowThisInstance] = useState(props.show);

    const setShowHide = display => {
        setshowThisInstance(display)
    }

    return (
        <Fragment>
            {showThisInstance && <Display>
                <h1>An Error Has Occurred</h1>
                <CloseButton setShowHide={setShowHide}>
                    Close
                </CloseButton>
            </Display>}
        </Fragment>
    );
}

function CloseButton(props) {
    return <button onClick={() => props.setShowHide(false)}>Close</button>
  }

export default Modal;