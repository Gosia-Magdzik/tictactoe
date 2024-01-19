import React, { useState } from 'react';
import { PlayerWrapper,
        PlayerName,
        PlayerSymbol,
        Button,
        Input,
} from './styled';

export const Player = ({name, symbol}) => {

    const [isEditing, setIsEditing] = useState(false);

    function handleEditing() {
        setIsEditing((editing) => !editing);
    }

    let playerName = <PlayerName>{name}</PlayerName>;
    if (isEditing) {
        playerName = <Input type="text" required defaultValue={name}/>;
    }

    let btnCaption = "Edit";
    if (isEditing) {
        btnCaption = "Save";
    }

  return (
    <li>
        <PlayerWrapper>
            {playerName}
            <PlayerSymbol>{symbol}</PlayerSymbol>
        </PlayerWrapper>
        <Button onClick={handleEditing}>
            {btnCaption}
        </Button>
  </li>
  )
}
