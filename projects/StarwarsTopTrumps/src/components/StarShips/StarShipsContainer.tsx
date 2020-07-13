import React, { FunctionComponent, useContext, useState, useEffect, Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import StarShip from './StarShip'
import QUERY_STARWARS_SHARSHIPS from './query'
import { StarshipsEdge } from '../../generated/graphql';
import getRandom from '../../utils/getRandom';
import getHighest from '../../utils/getHighest';
import Card from '../Card';
import GameHistoryContext from '../../context/GameHistoryContext';
import { ErrorComponent, LoadingComponent } from '../Components';

interface StarShipsContainerProps {
  numberOfShips: number;
  currentRound: number;
}

export const StarShipsContainer: FunctionComponent<StarShipsContainerProps> =
    ({ numberOfShips, currentRound }) => {
  const { data, error, loading } = useQuery(QUERY_STARWARS_SHARSHIPS);
  const { setLastWinner,  gameHistory, setGameHistory }  = useContext(GameHistoryContext)
  const [ currentCards, setCurrentCards] = useState();   

  useEffect(() => {
    if (!data?.allStarships?.edges) 
      return

    const ships = getRandom(data?.allStarships?.edges, numberOfShips);
    const winner = getHighest(ships, 'hyperdriveRating')

    setCurrentCards(ships)

    setLastWinner && setLastWinner(winner?.node?.name)
    setGameHistory && setGameHistory([...gameHistory || [], winner?.node?.name])

     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentRound]);

  if (loading) {
    return <LoadingComponent />
  }

  if (error || !data) {
    return <ErrorComponent />;
  }

  return (
    <Fragment>
        {currentCards?.map((starshipsEdge: StarshipsEdge, index: number) => {
          if (starshipsEdge?.node) {
            return (
              <Card key={index} >
                <StarShip player={index + 1} ship={starshipsEdge.node}></StarShip>
              </Card>)
            }
          })}
    </Fragment>
  )
};

export default StarShipsContainer;
