import React from 'react';
import { 
        GameOverWrapper, 
        H2,
        Info,
        Button 
    } from './styled';

export const GameOver = ({ winner }) => {
  return (
    <GameOverWrapper>
        <H2>Game Over!</H2>
        <Info>{winner} won !</Info>
        <Info>
            <Button> Rematch ! </Button>
        </Info>
    </GameOverWrapper>
  )
}
