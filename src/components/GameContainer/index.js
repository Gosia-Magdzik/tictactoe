import React from 'react';
import { 
      GameContainerWrapper,
      OrderedList,
} from './styled';
import { Player } from '../Player';


export const GameContainer = () => {
  return (
    <GameContainerWrapper>
        <OrderedList>
          <Player
            name="Player 1" symbol="X"
          />
          <Player
            name="Player 2" symbol="O"
          />
        </OrderedList>
    </GameContainerWrapper>
  )
}
