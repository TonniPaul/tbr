import styled from "styled-components";

export const TestimonyContainer = styled.section`
  background: var(--light-grey);
  text-align: center;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1440px;
    padding: 1rem 2rem;
    gap: 20px;
    margin: auto;

    & div {
      width: 300px;
      aspect-ratio: 1/1;
      background: #151e2b;

      & img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
