import styled from "styled-components";
import { bounce } from "@/styles/globals.styles";

interface ToastStyleProps {
  visible: boolean;
}

export const ToastContainer = styled.div<ToastStyleProps>`
  position: fixed;
  background: var(--black);
  width: 200px;
  top: 20%;
  left: auto;
  margin: auto;
  border: 2px solid var(--yellow);
  border-radius: 5px;
  animation: ${bounce} 2s infinite;

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
