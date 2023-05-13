import styled, { keyframes } from "styled-components";

export const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--short-transition);
  overflow: hidden;
  position: fixed;
  top: 0;
  z-index: 7;

  & p {
    font-style: italic;
    padding: 1rem;
  }
`;

export const InfiniteRotate = styled.div`
  animation: ${rotate} 1s linear infinite;
  width: max-content;
  background: var(--yellow);
  border-radius: 50%;
  padding: 0.5rem;
  margin: auto;
`;

