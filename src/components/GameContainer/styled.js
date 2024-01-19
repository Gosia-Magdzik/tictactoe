import styled from "styled-components";

export const GameContainerWrapper = styled.div`
    max-width: 45rem;
    margin: 3rem auto;
    padding: 2rem;
    border-radius: 6px;
    background: linear-gradient(#383624, #282617);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    position: relative;
`

export const OrderedList = styled.ol`
    list-style: none;
    padding: 0;
    margin: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    &.active {
      li {
        border-color: #f6e35a;
        animation: pulse 2s infinite ease-in-out;
      }
    }
`

