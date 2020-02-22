import React, { useState } from 'react';
import Dice from './components/Game/Dice';
import Player from './components/Game/Player';
import Monster from './components/Game/Monster';
import Dashboard from './components/Game/Dashboard';
import styled from "styled-components"
import { GameStateProvider } from './context/GameStateContext';
import rollRoundsDice from './utils/dice';
import getLoser from './utils/getLoser';
import GameStatus from './types/GameStatus'
import calcauleScore from './utils/score'

// used stylised component for simple rendering
const Game = styled.div`
  border: 5px solid #6de0d0;
  padding: 4em;
  border-radius: 25px;
`

const MainArea = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

const Score = styled.div`
    text-align: center;
    font-size: 4em;
    font-weight: bold;
`

const DiceArea = styled.div``

function App() {

    const [ playerTotalHealth, setPlayerTotalHealth ] = useState(100);
    const [ monsterTotalHealth, setMonsterTotalHealth ] = useState(100);
    const [ gameStatus, setGameStatus ] = useState(GameStatus.Fighting);
    const [ dice, setDice ] = useState();

    const [ currentPlayersHealth, setPlayersRoundScore ] = useState(0);
    const [ currentMonsterHealth, setMonsterRoundScoree ] = useState(0);

    function handleGameClick() {

        const dices = rollRoundsDice()
        const currentRoundScore = calcauleScore(dices)

        if (!currentRoundScore) {
            // handle error
            return;
        }

        const playersHealth = playerTotalHealth - currentRoundScore.playersDamage;
        const monstersHealth = monsterTotalHealth - currentRoundScore.monstersScore;
        
        setDice(dices);
        setPlayersRoundScore(currentRoundScore.playersScore);
        setMonsterRoundScoree(currentRoundScore.monstersScore);
        setPlayerTotalHealth(playersHealth)
        setMonsterTotalHealth(monstersHealth)

        const status = getLoser(playersHealth, monstersHealth);
        console.log(status)
        setGameStatus(status)
      }

    return (
        <Game>
            <GameStateProvider value={{playerTotalHealth, setPlayerTotalHealth, monsterTotalHealth, setMonsterTotalHealth, dice, setDice}}>
                <MainArea>
                    <Player />
                    <DiceArea>
                        <Dice roll={dice?.[0]}></Dice>
                        <Dice roll={dice?.[1]}></Dice>
                        {currentPlayersHealth !== 0 && 
                            <Score>
                                {currentPlayersHealth}
                            </Score>}
                    </DiceArea>
                    <DiceArea>
                        <Dice roll={dice?.[2]}></Dice>
                        <Dice roll={dice?.[3]}></Dice>
                        {currentMonsterHealth !== 0 && 
                            <Score>
                                {currentMonsterHealth}
                            </Score>}
                    </DiceArea>
                    <Monster />
                </MainArea>
                <Dashboard attackClick={handleGameClick} gameStatus={gameStatus}></Dashboard>
            </GameStateProvider>
        </Game>
)}

export default App;