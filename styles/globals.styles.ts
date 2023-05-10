import styled, { keyframes } from "styled-components";

export const SectionHeaderText = styled.p`
  font-size: 17px;
  font-weight: 800;
  padding: 1rem 0;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const ActionButtonStyle = styled.button<{ color?: string }>`
  background: ${({ color }) => (color ? color : "var(--yellow)")};
  padding: 0.5rem 0.8rem;
  border-radius: var(--border_radius_small);
  color: var(--white);
  transition: background var(--short-transition);
  border: 1px solid ${({ color }) => (color ? color : "var(--yellow)")};
  z-index: 1;
  &:hover {
    background: var(--white);
    color: ${({ color }) => (color ? color : "var(--yellow)")};
  }

  @media (min-width: 768px) {
    padding: 0.5rem 2rem;
  }
`;

export const BoldText = styled.span`
  font-weight: 700;
`;

export const bounce = keyframes`
  50% {transform : translateY(-20px);}
`;
