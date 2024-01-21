import React, { useState } from 'react';
import { 
      GameContainerWrapper,
      OrderedList,
} from './styled';
import { Player } from '../Player';
import { GameBoard } from '../GameBoard';
import { Log } from '../Log';


export const GameContainer = () => {

  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer => curActivePlayer === 'X' ? 'O' : 'X'));
    setGameTurns(prevTurns => {
      let currentPlayer = 'X';
      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O'
      }

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
    <Log/>
    </>
  )
}
