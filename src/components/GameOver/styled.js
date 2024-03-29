import styled, { keyframes } from "styled-components";

const popInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

export const GameOverWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(40, 38, 23, 0.95);
    animation: ${popInAnimation} 0.5s cubic-bezier(0.68, -0.55, 0.65, 0.52) forwards;
`

export const H2 = styled.h2`
    font-family: 'Caprasimo', cursive;
    font-size: 4rem;
    text-align: center;
    color: #fcd256;
    margin: 0;
`

export const Info = styled.p`
    font-size: 2rem;
    text-align: center;
    color: #e1dec7;
`

export const Button = styled.button`
    display: block;
    margin: 0 auto;
    font-size: 1.5rem;
    background: none;
    border: 2px solid #fcd256;
    color: #fcd256;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s, color 0.2s;
    box-shadow: 0 0 8px rgba(255, 187, 0, 0.4);

    &:hover {
        background: #fcd256;
        color: #3f3b00;
        transform: scale(1.1);
        box-shadow: 0 0 20px rgba(255, 187, 0, 0.8);
    } 
`