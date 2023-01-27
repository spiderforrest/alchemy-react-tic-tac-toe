import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext.js';

export default function Box({ box, idx }) {
  const { doMove } = useContext(GameContext);
  return (
    <div className="box" onClick={() => doMove(idx)}>
      <p>{box.toUpperCase()}</p>
    </div>
  );
}
