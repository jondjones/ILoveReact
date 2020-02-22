
import React, { FunctionComponent, useContext, useState, useEffect, Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import FilmCharacter from './FilmCharacter'
import QUERY_STARWARS_SHARSHIPS from './query'
import { PeopleEdge } from '../../generated/graphql';
import getRandom from '../../utils/getRandom';
import getHighest from '../../utils/getHighest';
import Card from '../Card';
import GameHistoryContext from '../../context/GameHistoryContext';
import { ErrorComponent, LoadingComponent } from '../Components';

interface FilmCharactersGameContainerProps {
  numberOfPeople: number;
  currentRound: number;
}

export const FilmCharactersGameContainer: FunctionComponent<FilmCharactersGameContainerProps> =
    ({ numberOfPeople, currentRound }) => {

  const { data, error, loading } = useQuery(QUERY_STARWARS_SHARSHIPS);
  const { setLastWinner,  gameHistory, setGameHistory }  = useContext(GameHistoryContext)
  const [ currentCards, setCurrentCards] = useState();   

  useEffect(() => {
    if (!data?.allPeople?.edges) 
      return

    const people = getRandom(data?.allPeople?.edges, numberOfPeople);
    const winner = getHighest(people, 'height')
    setCurrentCards(people)
    setLastWinner && setLastWinner(winner?.node?.name)
    setGameHistory && setGameHistory([...gameHistory || [], winner?.node?.name])

     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentRound]);

  if (loading) {
    return <LoadingComponent />;
  }

  if (error || !data) {
    return <ErrorComponent />;
  }

  return (
    <Fragment>
        {currentCards?.map((peopleEdge: PeopleEdge, index: number) => {
          if (peopleEdge?.node) {
            return (
              <Card key={index} >
                <FilmCharacter player={index + 1} person={peopleEdge.node}></FilmCharacter>
              </Card>)
            }
          })}
    </Fragment>
  )
};

export default FilmCharactersGameContainer;