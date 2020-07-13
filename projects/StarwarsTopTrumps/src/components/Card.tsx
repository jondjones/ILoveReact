import React, { FunctionComponent } from 'react';
import styled from "styled-components"

const GridItem = styled.div`
    border: 1px solid white;
    padding-left: 20px;
    background-color: black;
    height: 30vh;
`
interface CardProps {}

const Card: FunctionComponent<CardProps> = (props) => {
  return (
    <GridItem>
        {props.children}
    </GridItem>
  )
}

export default Card;

