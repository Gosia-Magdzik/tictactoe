import { GameBoardWrapper,
        Button,
        Ol,
        Li,
} from "./styled";

export const GameBoard = ({ onSelectedSquare, board }) => {

    return (
    <GameBoardWrapper>
        {board.map((row, rowIndex) => 
            <Li key={rowIndex}>
                <Ol>
                    {row.map((playerSymbol, colIndex) =>
                        <Li key={colIndex}>
                            <Button 
                                onClick={() => onSelectedSquare(rowIndex, colIndex)}
                                disabled={playerSymbol !== null}
                            >
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
