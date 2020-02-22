import React, { useState } from 'react';
import FilmCharactersContainer from '../../components/FilmCharacter/FilmCharactersContainer'
import StarShipsContainer from '../../components/StarShips/StarShipsContainer'
import Dashboard from '../../components/Dashboard'
import styled from "styled-components"
import StarwarsLogo from '../../image/starwars.png'
import Background from '../../image/background.jpg'
import GameType from '../../types/gameType'

const MainContainer = styled.div`
  background-image: url(${Background});
  background-repeat: repeat;
`

const GameContainer = styled.div`
  display: grid;
  margin: 2rem;
  grid-template-columns: 30% 25% 25%;
  grid-column-gap: 5%;
  height: 60vh;
`

function GamePage() {
  const [ currentGameType, setCurrentGameType] = useState(GameType.Character);
  const [ currentRound, setCurrentRound] = useState(0);

  function handleGameClick(event: GameType) {
    if (currentGameType !== event) {
      setCurrentGameType(currentGameType)
    }
    setCurrentRound(currentRound + 1)
  }

  return (
    <MainContainer>
      <img src={StarwarsLogo} height="250" width="350" alt="Starwars"/>
      <GameContainer>
        <Dashboard handleGameClick={handleGameClick}/>
        {currentGameType === GameType.Character && <FilmCharactersContainer numberOfPeople={2} currentRound={currentRound}></FilmCharactersContainer>}
        {currentGameType === GameType.Spaceship && <StarShipsContainer numberOfShips={2} currentRound={currentRound}></StarShipsContainer>}
      </GameContainer>
    </MainContainer>
  )
}

export default GamePage;
