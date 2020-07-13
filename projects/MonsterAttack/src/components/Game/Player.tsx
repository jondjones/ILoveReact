import React, { useContext } from 'react';
import GameStateContext from '../../context/GameStateContext';
import Hero from '../../img/jondjones.png'
import styled from "styled-components"

const Score = styled.div`
    font-size: 2em;
    text-align: center;
`

const Image = styled.div`
    text-align: center;
`

function Player() {
  const { playerTotalHealth } = useContext(GameStateContext)
  
  return (
    <div>
      <Image>
        <img src={Hero} alt="Hero" height="250" width="250"/>
      </Image>
      <Score> 
      <progress id="health" value={playerTotalHealth} max="100"></progress>
        Jons Health {playerTotalHealth} 
      </Score> 
    </div>
)}

export default Player;