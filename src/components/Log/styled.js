import styled, { keyframes } from "styled-components";

export const LogWrapper = styled.ol`
    max-width: 20rem;
    color: #3f3b00;
    list-style: none;
    margin: 2rem auto;
    padding: 0;
    text-align: center;
`
const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const List = styled.li`
    border-radius: 4px;
    animation: ${slideInFromLeft} 1s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
    margin: 0.75rem;
`;