import React from 'react';
import { 
      GameContainerWrapper,
      OrderedList,
} from './styled';
import { Player } from '../Player';
import { GameBoard } from '../GameBoard';


export const GameContainer = () => {
  return (
    <GameContainerWrapper>
        <OrderedList>
          <Player
            initialName="Player 1" symbol="X"
          />
          <Player
            initialName="Player 2" symbol="O"
          />
        </OrderedList>
        <GameBoard />
    </GameContainerWrapper>
  )
}
