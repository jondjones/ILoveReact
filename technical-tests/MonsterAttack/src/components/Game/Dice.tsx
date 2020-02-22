import React, { FunctionComponent} from 'react';
import styled from "styled-components"
import './dice.css'

interface DiceProps {
    roll: number
}

const Dice = styled.div`
    font-size: 7em;
    text-align: center;
`

const DiceComponent: FunctionComponent<DiceProps> = ({roll}) => {

    const className = `dice dice-${roll}`
    return (
    <Dice>
        <span className={className} title={className}></span>
    </Dice>
)}

export default DiceComponent;