import styled, { keyframes } from "styled-components";

interface ColorsProps {
  color?: string;
  hoverColor?: string;
}

export const SectionHeaderText = styled.div`
  font-size: 17px;
  font-weight: 800;
  padding: 2rem 0;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const ActionButtonStyle = styled.button<ColorsProps>`
  background: ${({ color }) => (color ? color : "var(--yellow)")};
  padding: 0.5rem 0.8rem;
  border-radius: var(--border_radius_small);
  transition: background var(--short-transition);
  color: var(--black);
  border: 1px solid var(--yellow);
  z-index: 1;
  display: flex;
  margin: auto;

  & > img,
  span {
    align-self: center;
    padding: 0;
  }

  & > span {
    margin-left: 10px;
    font-weight: 600;
  }

  &:hover {
    background: ${({ hoverColor }) =>
      hoverColor ? hoverColor : "var(--white)"};
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
