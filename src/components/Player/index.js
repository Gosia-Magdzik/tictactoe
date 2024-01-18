import React from 'react';
import { PlayerWrapper,
        PlayerName,
        PlayerSymbol,
} from './styled';

export const Player = ({name, symbol}) => {
  return (
    <li>
        <PlayerWrapper>
            <PlayerName>{name}</PlayerName>
            <PlayerSymbol>{symbol}</PlayerSymbol>
        </PlayerWrapper>
        <button>Edit</button>
  </li>
  )
}
