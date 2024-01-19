import React, { useState } from 'react';
import { PlayerWrapper,
        PlayerName,
        PlayerSymbol,
        Button,
        Input,
        Li
} from './styled';

export const Player = ({ initialName, symbol, isActive }) => {

    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);

    function handleEditing() {
        setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let EditablePlayerName = <PlayerName className={isActive ? 'active' : undefined}>
                                {playerName}
                            </PlayerName>;
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
    <Li className={isActive ? 'active' : undefined}>
        <PlayerWrapper>
            {EditablePlayerName}
            <PlayerSymbol className={isActive ? 'active' : undefined}>
                {symbol}
            </PlayerSymbol>
        </PlayerWrapper>
        <Button onClick={handleEditing}>
            {btnCaption}
        </Button>
  </Li>
  )
}
