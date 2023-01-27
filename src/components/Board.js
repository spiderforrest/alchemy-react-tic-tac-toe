import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext.js';
import Box from './Box.js';

export default function Board() {
  const { board } = useContext(GameContext);
  return (
    <section className="board">
      {board.map((box, idx) => {
        return <Box key={idx} idx={idx} box={box} />;
      })}
    </section>
  );
}
