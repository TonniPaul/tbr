import styled from "styled-components";

export const SubTotalContainer = styled.div`
  background: #f2ecec;
  padding: 1rem;
  border-radius: var(--border_radius_small);
  margin: 1rem auto;
  height: max-content;

  & p {
    font-size: 0.9rem;
    margin-bottom: 10px;
  }

  & button {
    width: 100%;
    border: 1px solid var(--yellow);

    @media (min-width: 600px) {
      padding: 0.5rem 1rem;
    }
  }
  @media (min-width: 600px) {
    width: 40%;
    margin: 0;
  }
  @media (min-width: 768px) {
    flex-basis: 30%;
  }
`;
