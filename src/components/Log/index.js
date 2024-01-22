import { LogWrapper, List } from './styled';

export const Log = ({ turns }) => {
  return (
    <LogWrapper>
      {turns.map(turn =>
        <List key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected {turn.square.row},{turn.square.col}
        </List>
      )}
    </LogWrapper>
  )
}
