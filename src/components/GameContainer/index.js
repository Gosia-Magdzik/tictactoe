import React, { useState } from 'react';
import { 
      GameContainerWrapper,
      OrderedList,
} from './styled';
import { Player } from '../Player';
import { GameBoard } from '../GameBoard';
import { Log } from '../Log';
import { WINNING_COMBINATIONS } from "../../winning-combinations.js"

function deriveActivePlayer(gameTurns) {

  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }

  return currentPlayer;
}

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

export const GameContainer = () => {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = initialGameBoard;

  for (const turn of gameTurns){
      const { square, player } = turn;
      const { row, col } = square;

      gameBoard[row][col] = player;
  }

  let winner;

  for (const combinations of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combinations[0].row][combinations[0].column];
    const secondSquareSymbol = gameBoard[combinations[1].row][combinations[1].column];
    const thirdSquareSymbol = gameBoard[combinations[2].row][combinations[2].column];

    if (
      firstSquareSymbol && 
      firstSquareSymbol === secondSquareSymbol && 
      firstSquareSymbol === thirdSquareSymbol
      ) {
        winner = firstSquareSymbol;
      }
  }

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
                        { square: {row: rowIndex, col: colIndex}, player: activePlayer}, 
                        ...prevTurns
                        ];
      return updatedTurns;
    });
  }

  return (
    <>
    <GameContainerWrapper>
        <OrderedList className="highlight-player">
          <Player
            initialName="Player 1" 
            symbol="X"
            isActive={activePlayer === 'X'}
          />
          <Player
            initialName="Player 2" 
            symbol="O"
            isActive={activePlayer === 'O'}
          />
        </OrderedList>
        {winner && <p>You won, {winner}!</p>}
        <GameBoard 
          onSelectedSquare={handleSelectSquare}
          board={gameBoard}
        />
    </GameContainerWrapper>
    <Log turns={gameTurns} />
    </>
  )
}
