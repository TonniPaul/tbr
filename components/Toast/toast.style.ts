import styled, { keyframes } from "styled-components";
import { bounce } from "@/styles/globals.styles";

const pulse = keyframes`
50% {transform : translateY(-20px)  translateX(-50%)}
`;

export const ToastContainer = styled.div`
  position: fixed;
  background: var(--black);
  width: calc(100% - 1.5rem);
  max-width: 300px;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  margin: auto;
  border: 2px solid var(--yellow);
  border-radius: 5px;
  animation: ${pulse} 2s;
  text-align: center;

  & p {
    padding: 0.5rem 1rem !important;
  }

  & p:first-child {
    background: var(--yellow);
  }

  & p:last-child {
    color: var(--white);
    font-weight: 700;
    margin-bottom: 0;
  }
`;
