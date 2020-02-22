import React, { useState } from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import getClient from './utils/getClients';
import GamePage from './pages/GamePage/GamePage';
import HistoryPage from './pages/HistoryPage/HistoryPage';
import { GameHistoryProvider } from '../src/context/GameHistoryContext';

function App() {
    const [gameHistory, setGameHistory] = useState([]);
    const [lastWinner, setLastWinner ] = useState();
    const client = getClient('http://localhost:5000');

    return ( 
        <GameHistoryProvider value={{gameHistory, setGameHistory, lastWinner, setLastWinner}}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                    <ApolloProvider client={client}>  
                        <GamePage />
                    </ApolloProvider>
                    </Route>
                    <Route path="/history">
                    <HistoryPage />
                    </Route>
                </Switch>
            </BrowserRouter>
        </GameHistoryProvider>
    )}

export default App