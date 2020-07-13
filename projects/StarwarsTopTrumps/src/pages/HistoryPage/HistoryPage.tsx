import React, { FunctionComponent, useContext }from 'react';
import GameHistoryContext from '../../context/GameHistoryContext';
import { NavLink } from 'react-router-dom';
import styled from "styled-components"
import Background from '../../image/background.jpg'

const MainContainer = styled.div`
  background-image: url(${Background});
  background-repeat: repeat;
  color: white;
  font-size: 1rem;
`
const Title = styled.div`
  color: #fff;
  font-size: 2rem;
`

interface HistoryPageProps {}

export const HistoryPage: FunctionComponent<HistoryPageProps> = () => {
  const { gameHistory }  = useContext(GameHistoryContext)

  return (
    <MainContainer>
        <Title>Game History</Title>
        {gameHistory && gameHistory?.map((history) => {
          return <div>{history}</div>
        })}
        <NavLink to="/">Back</NavLink>
    </MainContainer>
  )
};

export default HistoryPage;