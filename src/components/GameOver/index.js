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
        { winner &&
            <Info>{winner} won !</Info>
        }
        {!winner &&
            <Info>It's a draw!</Info>
        }
        <Info></Info>
        <Info>
            <Button> Rematch ! </Button>
        </Info>
    </GameOverWrapper>
  )
}
