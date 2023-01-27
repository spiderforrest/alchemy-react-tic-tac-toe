import React, { createContext, useState } from 'react';

export const GameContext = createContext('');
export const GameProvider = ({ children }) => {
  // initialize everything to starting game state
  const [currentPlayer, setCurrentPlayer] = useState('x');
  const [active, setActive] = useState(true);
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [counter, setCounter] = useState(0);
  const [gameMessage, setGameMessage] = useState('Play a move to begin!');
  function setup() {
    setCurrentPlayer('x');
    setActive(true);
    setBoard(['', '', '', '', '', '', '', '', '']);
    setCounter(0);
    setGameMessage('Play a move to begin!');
  }

  function doMove(idx) {
    // check if game's over or spot's taken
    if (board[idx] || !active) return;
    // modify the space
    const newBoard = [...board];
    newBoard[idx] = currentPlayer;
    setBoard(newBoard);
    const win = checkForWin(newBoard, counter + 1);
    if (win) {
      setGameMessage(`player ${win.toUpperCase()} wins!`);
      setActive(false);
      return;
    }
    if (win === 'tie') {
      setGameMessage('Tie!');
      setActive(false);
      return;
    }
    // change turn
    if (currentPlayer === 'x') {
      setCurrentPlayer('o');
      setGameMessage("player O's turn");
    } else {
      setCurrentPlayer('x');
      setGameMessage("player X's turn");
    }
    setCounter(counter + 1);
  }

  function checkForWin(board, counter) {
    // i wish i was more clever :(
    // aaaa i don't have time to figure out why my for loops are broken this hurts my soul
    // if it's str8 in a line horizontal it's 3 in a row
    if (board[0] && board[0] === board[1] && board[1] === board[2]) return board[0];
    if (board[3] && board[3] === board[4] && board[4] === board[5]) return board[3];
    if (board[6] && board[6] === board[7] && board[7] === board[8]) return board[6];
    // if it's str8 vertical it's every 3rd
    if (board[0] && board[0] === board[3] && board[3] === board[6]) return board[0];
    if (board[1] && board[1] === board[4] && board[4] === board[7]) return board[1];
    if (board[2] && board[2] === board[5] && board[5] === board[8]) return board[2];
    // if it's angle it's every 4th or 2nd
    if (board[0] && board[0] === board[4] && board[4] === board[8]) return board[0];
    if (board[2] && board[2] === board[4] && board[4] === board[6]) return board[2];
    // check for a tie
    if (counter >= 9) return 'tie';
    // else
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
        setup,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
