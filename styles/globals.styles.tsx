import styled from "styled-components";

export const SectionHeaderText = styled.p`
  font-size: 17px;
  font-weight: 800;
  padding: 1rem 0;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const ActionButtonStyle = styled.button`
  background: var(--yellow);
  padding: 0.5rem 2rem;
  border-radius: var(--border_radius_small);
  color: var(--white);
  transition: background var(--short-transition);
  border: 1px solid var(--yellow);

  &:hover {
    background: var(--white);
    color: var(--yellow);
  }
`;

export const CurrencyStyle = styled.span`
  font-weight: 700;
`;
