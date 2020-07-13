import React, { useContext } from 'react';
import GameStateContext from '../../context/GameStateContext';
import MonsterImage from '../../img/JobCentre.jpg'
import styled from "styled-components"

const Score = styled.div`
    font-size: 2em;
    text-align: center;
`

const Image = styled.div`
    text-align: center;
`
function Monster() {

  const { monsterTotalHealth } = useContext(GameStateContext)

  return (
    <div>
      <Image>
        <img src={MonsterImage} alt="Monster" height="250" width="250"/>
      </Image>
      <Score> 
      <progress id="health" value={monsterTotalHealth} max="100"></progress>
        Job Centres Health {monsterTotalHealth}
      </Score> 
    </div>
)}

export default Monster;