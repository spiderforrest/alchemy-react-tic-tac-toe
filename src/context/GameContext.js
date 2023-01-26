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
    if (board[idx] || !active) return;
    // modify the space
    const newBoard = [...board];
    newBoard[idx] = currentPlayer;
    setBoard(newBoard);
    console.log(checkForWin());

    // change turn
    if (currentPlayer === 'x') {
      setCurrentPlayer('o');
    } else {
      setCurrentPlayer('x');
    }
  }

  function checkForWin() {
    // i wish i was more clever :(
    // if it's str8 in a line horizontal it's 3 in a row
    for (let i = 1; i < 9; i *= 3) {
      if (board[i] && board[i - 1] === board[i] && board[i] === board[i + 1]) return 'a';
    }
    // if it's str8 vertical it's every 3rd
    for (let i = 0; i < 3; i++) {
      if ((board[i] === board[i + 3]) === board[i + 6]) return 'b';
    }
    // if it's angle it's every 4th or 2nd
    if ((board[0] === board[4]) === board[8]) return 'c';
    if ((board[2] === board[4]) === board[6]) return 'd';
    return false;
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
