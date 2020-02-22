import React, { FunctionComponent } from 'react';
import { Person } from '../../generated/graphql';
import styled from "styled-components"

const PeopleCard = styled.div`
  color: #fff;
  font-weight: 300;
  font-size: 1rem;
`

interface FilmCharacterProps {
  person: Person;
  player: number;
}

export const FilmCharacter: FunctionComponent<FilmCharacterProps> =
  ({person, player}) => {
    
    return (
       <PeopleCard>
          <p>Player: Player {player}</p>
          <p>Name: {person?.name}</p>
          <p>Height: {person?.height}</p>
      </PeopleCard>
    )
};

export default FilmCharacter;