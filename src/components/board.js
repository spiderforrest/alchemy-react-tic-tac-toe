import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext.js';
import Box from './Box.js';

export default function Board() {
  const { board } = useContext(GameContext);
  return (
    <section>
      {board.map((_, idx) => {
        return <Box key={idx} idx={idx} />;
      })}
    </section>
  );
}
