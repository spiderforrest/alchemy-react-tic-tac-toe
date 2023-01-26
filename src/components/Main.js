import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext.js';
import Board from './Board.js';

export default function Main() {
  const { message } = useContext(GameContext);
  return (
    <main>
      <h3>{message}</h3>
      <Board />
    </main>
  );
}
