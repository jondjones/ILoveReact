import styled, { keyframes } from 'styled-components'
import React from 'react';


const SpinnerContainer = styled.div`
    display: grid;
    justify-items: center;
    padding: 1rem;
`

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const Spinner = styled.div`
    border: 0.2em solid rgba(0, 0, 0, 0.1);
    border-top: 0.2em solid #767676;
    border-radius: 50%;
    width: 2.28571429rem;
    height: 2.28571429rem;
    animation: ${spin} 0.6s linear infinite;
`


const SpinnerComponent = () => {
    return (
        <SpinnerContainer>
            <Spinner />
        </SpinnerContainer>
    )
}

export default SpinnerComponent
