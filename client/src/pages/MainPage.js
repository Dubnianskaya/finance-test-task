import React, { useState, useEffect } from 'react';
import { io } from "socket.io-client";
import { Container } from "../components/Container";
import { TickersTable } from "../components/TickersTable";
import { MainPageContainer } from '../components/Container/Container.styled';
import { FavoritesList } from '../components/FavoritesList';

export function MainPage () {
    const socket = io.connect("http://localhost:4000/");
    const [tickers, setTickers] =  useState({prevState: [], currentState: []});
 
    useEffect(() => {
        socket.emit('start');
        socket.on('ticker', (data) => {
            setTickers(prevStateOj => ({
                ...prevStateOj,
                prevState: prevStateOj.currentState,
                currentState: data
            }))
            });
        return () => {
        socket.off('ticker', setTickers(({prevState: [], currentState: []})));
        }
    }, []);
  
    return (
        <Container>
         <MainPageContainer>
           <FavoritesList tickers={tickers}/>
           <TickersTable tickers={tickers}/>
         </MainPageContainer>
       </Container>
    );
  
}