import styled from "styled-components";

export const ErrorMainContainer = styled.section`
  margin: auto;
  text-align: center;
  padding: 3rem 2rem;

  & > img {
   @media (min-width: 768px) {
      width: 900px;
   }
  }

  & > h1 {
    font-size: 60px;
    font-family: var(--secondary-font);
    margin: -20px auto 5px;
  }

  & > p {
    font-size: 1rem;
    max-width: 600px;
    margin: auto;
    padding-bottom: 2rem;
  }

  & > a {
    border: none;
    background: var(--yellow);
    padding: 0.5rem 3rem;
    font-size: 1rem;
    border-radius: 5px;
    color: var(--white);
  }
`;