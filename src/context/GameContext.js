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
    console.log(checkForWin(newBoard));
    // change turn
    if (currentPlayer === 'x') {
      setCurrentPlayer('o');
    } else {
      setCurrentPlayer('x');
    }
  }

  function checkForWin(board) {
    // i wish i was more clever :(
    // aaaa i don't have time to figure out why my for loops are broken this hurts my soul
    // if it's str8 in a line horizontal it's 3 in a row
    if (board[0] && board[0] === board[1] && board[1] === board[2]) return 'a';
    if (board[3] && board[3] === board[4] && board[4] === board[5]) return 'a';
    if (board[6] && board[6] === board[7] && board[7] === board[8]) return 'a';
    // if it's str8 vertical it's every 3rd
    if (board[0] && board[0] === board[3] && board[3] === board[6]) return 'b';
    if (board[1] && board[1] === board[4] && board[3] === board[7]) return 'b';
    if (board[2] && board[2] === board[5] && board[3] === board[8]) return 'b';
    // if it's angle it's every 4th or 2nd
    if (board[0] && board[0] === board[4] && board[4] === board[8]) return 'c';
    if (board[0] && board[2] === board[4] && board[4] === board[6]) return 'd';
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
