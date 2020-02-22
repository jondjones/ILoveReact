import React, { useState } from 'react';
import styled from "styled-components";

const Heading = styled.div`
    display: block;
    font-weight: bold;
`

const withCollapse = (title, WrappedComponent, showAll) => {
  function WithCollapse(props) {

    const [showThisInstance, setshowThisInstance] = useState(showAll);

    const setShowHide = display => {
      setshowThisInstance(display)
    }
    
    return (
      <div>
        <Heading>
        {title} {showThisInstance ? <HideButton setShowHide={setShowHide}/> : <ShowButton setShowHide={setShowHide}/>}
        </Heading>
        {showThisInstance && <WrappedComponent {...props} />}
      </div>)
    }    
  return WithCollapse;
};


function HideButton(props) {
  return <span 
    onClick={() => props.setShowHide(false)} 
    aria-label="Hide Button" 
    role="img">⬆️</span>
}

function ShowButton(props) {
  return <span 
    onClick={() => props.setShowHide(true)}
    aria-label="Hide Button" 
    role="img">⬇️</span>
}

export default withCollapse;
