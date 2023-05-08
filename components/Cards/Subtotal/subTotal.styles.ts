import styled from "styled-components";

export const SubTotalContainer = styled.div`
  background: #f2ecec;
  padding: 1rem;
  border-radius: var(--border_radius_small);
  margin: 1rem auto;
  height: max-content;

  & p {
    font-size: 1.0625rem;
    margin-bottom: 10px;
  }

  & button {
    width: 100%;
    padding: 1rem;
    border: 1px solid var(--yellow);
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    width: 30%;
    margin: 0;
  }
`;
