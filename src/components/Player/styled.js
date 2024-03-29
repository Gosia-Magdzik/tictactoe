import styled, {keyframes} from "styled-components"

const popInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const PlayerName = styled.span`
    display: inline-block;
    width: 10rem;
    font-size: 1rem;
    color: #e1dec7;
    text-transform: uppercase;
    margin: 0;
    padding: 0.5rem;
    border-radius: 4px;
    text-overflow: ellipsis;
    text-align: center;

    &.active {
        color: #f6e35a;
        font-size: 1.5rem;
    }
`

export const PlayerSymbol = styled.span`
    margin-left: 1rem;
    font-size: 1rem;
    color: #e1dec7;

    &.active {
        color: #f6e35a;
        font-size: 1.5rem;
    }
`

export const PlayerWrapper = styled.span`
    border: 2px solid transparent;
    padding: 0.5rem;
    border-radius: 4px;
    font-weight: bold;
`

export const Button = styled.button`
    width: 3rem;
    border: none;
    background: none;
    color: #c3ba78;
    font-size: 0.9rem;
    cursor: pointer;
    transition: color 0.2s;
    padding: 0.5rem 0.25rem 0.25rem 0.25rem;
    text-align: center;

    &:hover {
        color: #f8ca31; 
    }
`

export const Input = styled.input`
    font: inherit;
    font-size: 1rem;
    width: 10rem;
    border: none;
    padding: 0.5rem;
    animation: ${popInAnimation} 2s ;
    background-color: #46432f;
    text-align: center;
    text-transform: uppercase;

    &:focus {
        color: #e1dec7; 
    }
`

export const Li = styled.li`
    display: flex;
    align-items: center;
    width: 50%;
    border: 2px solid transparent;

        &.active {
            border-color: #f6e35a; 
            border-radius: 10px;
            animation: pulse 2s  ease-in-out;
        }
`
