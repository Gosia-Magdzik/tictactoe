import React from 'react';
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

export const GameBoard = () => {
  return (
    <GameBoardWrapper>
        {initialGameBoard.map((row, rowIndex) => 
            <Li key={rowIndex}>
                <Ol>
                    {row.map((playerSymbol, playerSymbolIndex) =>
                        <Li key={playerSymbolIndex}>
                            <Button>
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
