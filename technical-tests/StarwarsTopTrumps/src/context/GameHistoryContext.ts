import React from 'react';

interface GameHistoryContextProps {
    gameHistory: Array<string>,
    lastWinner: string,
    setGameHistory: Function,
    setLastWinner: Function
};

const GameHistoryContext = React.createContext<Partial<GameHistoryContextProps>>({});

export const GameHistoryProvider = GameHistoryContext.Provider
export const GameHistoryConsumer = GameHistoryContext.Consumer

export default GameHistoryContext