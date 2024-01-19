import React, { useState } from 'react';
import { 
      GameContainerWrapper,
      OrderedList,
} from './styled';
import { Player } from '../Player';
import { GameBoard } from '../GameBoard';


export const GameContainer = () => {

  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer => curActivePlayer === 'X' ? 'O' : 'X'));
  }

  return (
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
          activePlayerSymbol={activePlayer}
        />
    </GameContainerWrapper>
  )
}
