import styled from "styled-components";

export const GameBoardWrapper = styled.ol`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin: 3rem 0;
    padding: 0;
    flex-direction: column;
`

export const Button = styled.button`
    width: 8rem;
    height: 8rem;
    border: none;
    background: #aca788;
    color: #3f3b00;
    font-size: 5rem;
    cursor: pointer;
    font-family: 'Caprasimo', cursive;
    padding: 1rem;
`

export const Ol = styled.ol`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin: 0;
    padding: 0;
    list-style: none;
`

export const Li = styled.li`
    list-style: none;
`