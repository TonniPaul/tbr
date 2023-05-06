import styled, { keyframes } from "styled-components";

export const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfiniteRotate = styled.div`
  animation: ${rotate} 1s linear infinite;
  width: max-content;
  background: var(--yellow);
  border-radius: 50%;
  padding: 0.5rem;
`;

