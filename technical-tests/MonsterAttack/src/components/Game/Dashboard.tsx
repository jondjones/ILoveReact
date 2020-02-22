import React, { FunctionComponent, Fragment } from 'react';
import styled from "styled-components"
import GameStatus from '../../types/GameStatus'

const DashBoardPanel = styled.div`
  text-align: center;
  disaply: grid;
`

const Button = styled.button`
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  background: #ed3330;
  padding: 20px;
  border-radius: 5px;
  display: inline-block;
  border: none;
  transition: all 0.4s ease 0s;
`

const Message = styled.div`
  padding-top: 5vh;
  color: black:
`

const WinningMessage = styled.div`
  color: green;
  font-size: 5rem
`

const LosingMessage = styled.div`
  color: red;
  font-size: 5rem
`

interface DashboardProps {
  attackClick: Function,
  gameStatus: GameStatus
}

const Dashboard: FunctionComponent<DashboardProps> = ({attackClick, gameStatus}) => {
    console.log('GameStatus', gameStatus)
    return (
    <DashBoardPanel>
      <Button onClick={() => attackClick()}>Attack!</Button>
      <Message>
        <Fragment><a href="https://www.jondjones.com/frontend/react/">JonDJones</a> </Fragment>
        {gameStatus === 1 && <WinningMessage>Winner</WinningMessage>}
        {gameStatus === 2 && <LosingMessage>Loser</LosingMessage>}
      </Message>

    </DashBoardPanel>
)}

export default Dashboard;