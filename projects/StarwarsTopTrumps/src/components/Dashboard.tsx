import React, { FunctionComponent, useContext } from 'react';
import styled from "styled-components"
import GameType from '../types/gameType';
import { Link } from 'react-router-dom';
import GameHistoryContext from '../context/GameHistoryContext';

const DashBoardPanel = styled.div`
  padding-left: 20px;
  display: grid
`

const Button = styled.button`
  height: 10vh
`

const Title = styled.h3`
  color: white;
  text-align: center;
`

interface DashboardProps {
    handleGameClick: ((gameType: GameType) => void)
}

const Dashboard: FunctionComponent<DashboardProps> = ({handleGameClick}) => {
    const { lastWinner }  = useContext(GameHistoryContext)

    return (
        <DashBoardPanel>
            <Title>{lastWinner ? `Winner is ${lastWinner}` : `STARCARDS`}</Title> }
            <Button onClick={() => handleGameClick(GameType.Character)}>Actor Round</Button>
            <Button onClick={() => handleGameClick(GameType.Spaceship)}>Spaceship Round</Button>
            <Button><Link to="/history">History</Link></Button>
        </DashBoardPanel>
)}

export default Dashboard;