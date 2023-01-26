import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext.js';
import Board from './Board.js';
import './Main.css';

export default function Main() {
  const { message } = useContext(GameContext);
  return (
    <main>
      <h3>{message}</h3>
      <Board />
    </main>
  );
}
