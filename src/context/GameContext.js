import { createContext, useState } from 'react';

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
    const newBoard = [...board];
    newBoard[idx] = currentPlayer;
    setBoard(newBoard);
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
