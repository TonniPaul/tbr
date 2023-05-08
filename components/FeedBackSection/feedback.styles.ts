import styled from "styled-components";

export const TestimonyContainer = styled.section`
  background: var(--light-grey);
  text-align: center;

  & p {
    font-style: italic;
  }

  & > div {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    max-width: 1440px;
    padding: 1rem 2rem;
    gap: 20px;
    /* margin: auto; */
    flex-wrap: nowrap;
    overflow: scroll;
    width: 90%;
    margin: auto;

    &::-webkit-scrollbar {
      height: 5px;
    }

    & > div {
      min-width: 250px;
      aspect-ratio: 1/1;
      background: #151e2b;

      & img {
        width: 100%;
        height: 100%;
      }

      /* */
    }
  }
`;
