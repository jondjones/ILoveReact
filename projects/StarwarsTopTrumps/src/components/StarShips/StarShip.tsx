import React, { FunctionComponent } from 'react';
import { Starship } from '../../generated/graphql';
import styled from "styled-components"

const StarshipCard = styled.div`
  color: #fff;
  font-weight: 300;
`

interface StarShipProps {
  ship: Starship;
  player: number;
}

export const StarShip: FunctionComponent<StarShipProps> = ({ship, player}) => {
    return (
       <StarshipCard>
          <p>Player: Player {player}</p>
          <p>Model: {ship?.model}</p>
          <p>HyperdriveRating: {ship?.hyperdriveRating}</p>
       </StarshipCard>
    )
};

export default StarShip;