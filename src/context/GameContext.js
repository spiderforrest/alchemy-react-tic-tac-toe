import React, { createContext, useState } from 'react';

export const GameContext = createContext('');
export const GameProvider = ({ children }) => {
  // initialize everything to starting game state
  const [currentPlayer, setCurrentPlayer] = useState('x');
  const [active, setActive] = useState(true);
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [gameMessage, setGameMessage] = useState('Play a move to begin!');

  function doMove(idx) {
    // check if game's over or spot's taken
    if (!board[idx] || !active) return;
    // modify the space
    const newBoard = [...board];
    newBoard[idx] = currentPlayer;
    setBoard(newBoard);
    // change turn
    if (currentPlayer === 'x') {
      setCurrentPlayer('o');
    } else {
      setCurrentPlayer('x');
    }
  }

  return (
    <GameContext.Provider
      value={{
        currentPlayer,
        setCurrentPlayer,
        active,
        setActive,
        board,
        setBoard,
        gameMessage,
        setGameMessage,
        doMove,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
