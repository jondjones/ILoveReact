import React from 'react';
import GameStatus from '../types/GameStatus'

interface GameStateContextProps {
    playerTotalHealth: number,
    monsterTotalHealth: number,
    dice: Array<number>,
    gameStatus: GameStatus,
    setPlayerTotalHealth: Function,
    setMonsterTotalHealth: Function,
    setDice: Function
};

const GameStateContext = React.createContext<Partial<GameStateContextProps>>({});

export const GameStateProvider = GameStateContext.Provider
export const GameStateConsumer = GameStateContext.Consumer

export default GameStateContext