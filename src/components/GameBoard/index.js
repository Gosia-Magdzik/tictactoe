import React, { useState } from 'react';
import { GameBoardWrapper,
        Button,
        Ol,
        Li,
} from "./styled";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export const GameBoard = ({ onSelectedSquare, activePlayerSymbol }) => {

    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;
        });

        onSelectedSquare();
    }

    return (
    <GameBoardWrapper>
        {gameBoard.map((row, rowIndex) => 
            <Li key={rowIndex}>
                <Ol>
                    {row.map((playerSymbol, colIndex) =>
                        <Li key={colIndex}>
                            <Button 
                                onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                                {playerSymbol}
                            </Button>
                        </Li>
                    )}
                </Ol>
            </Li>
        )}
    </GameBoardWrapper>
  )
}
