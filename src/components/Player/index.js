import React, { useState } from 'react';
import { PlayerWrapper,
        PlayerName,
        PlayerSymbol,
        Button,
        Input,
} from './styled';

export const Player = ({initialName, symbol}) => {

    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);

    function handleEditing() {
        setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let EditablePlayerName = <PlayerName>{playerName}</PlayerName>;
    if (isEditing) {
        EditablePlayerName = <Input 
                        type="text" 
                        required 
                        defaultValue={playerName}
                        onChange={handleChange}
                    />;
    }

    let btnCaption = "Edit";
    if (isEditing) {
        btnCaption = "Save";
    }

  return (
    <li>
        <PlayerWrapper>
            {EditablePlayerName}
            <PlayerSymbol>{symbol}</PlayerSymbol>
        </PlayerWrapper>
        <Button onClick={handleEditing}>
            {btnCaption}
        </Button>
  </li>
  )
}
