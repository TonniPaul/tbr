import styled from "styled-components";

export const CountButton = styled.div`
  display: flex;
  justify-content: space-between;
  background: var(--light-grey);
  width: max-content;
  margin: 0.5rem 0;

  & > * {
    padding: 0.3rem 1rem;
    font-size: 1rem;
  }

  & button {
    font-weight: 900 !important;
    color: var(--yellow);
    font-size: 1.125rem;
    transition: color var(--short-transition);
  }
  & button:hover {
    color: var(--black);
  }
`;
