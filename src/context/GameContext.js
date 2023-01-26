import { createContext, useState } from 'react';

export const GameContext = createContext('');
export const GameProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState('x');
  const [active, setActive] = useState(true);
  const [board, setBoard] = useState([]);
  const [gameMessage, setGameMessage] = useState('Play a move to begin!');

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
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
