import React, { useContex } from 'react';
import { GameContext } from '../context/GameContext.js';

export default function Box({ box, idx }) {
  // todo: implement game logic and import it
  return (
    <div className="box">
      <p>{box}</p>
    </div>
  );
}
