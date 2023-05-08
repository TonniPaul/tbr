import styled from "styled-components";

export const SectionCardStyle = styled.section`
  max-width: 1440px;
  text-align: center;
  margin: auto;

  & > div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 10px;
    row-gap: 20px;
    /* padding: 1rem; */

    @media (min-width: 768px) {
      gap: 20px;
    }
  }
`;
