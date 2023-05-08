import styled from "styled-components";
import { bounce } from "@/styles/globals.styles";

export const ScrollToTopContainer = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  font-size: 30px;
  cursor: pointer;
  z-index: 3;
  background: var(--yellow);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--yellow);
  transition: transform var(--short-transition);
  animation: ${bounce} 3s infinite;

  & > img {
    transform: rotate(-90deg);
    filter: var(--white-filter);
  }
`;
