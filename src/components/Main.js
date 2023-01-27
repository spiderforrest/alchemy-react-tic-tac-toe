import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext.js';
import Board from './Board.js';
import './Main.css';

export default function Main() {
  const { gameMessage, setup } = useContext(GameContext);
  return (
    <main>
      <h3>{gameMessage}</h3>
      <button onClick={setup}>Restart</button>
      <Board />
    </main>
  );
}
