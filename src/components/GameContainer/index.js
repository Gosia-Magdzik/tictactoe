import React, { useState } from 'react';
import { 
      GameContainerWrapper,
      OrderedList,
} from './styled';
import { Player } from '../Player';
import { GameBoard } from '../GameBoard';
import { Log } from '../Log';

function deriveActivePlayer(gameTurns) {

  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }

  return currentPlayer;
}

export const GameContainer = () => {

  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

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
        <GameBoard 
          onSelectedSquare={handleSelectSquare}
          turns={gameTurns}
        />
    </GameContainerWrapper>
    <Log turns={gameTurns} />
    </>
  )
}
