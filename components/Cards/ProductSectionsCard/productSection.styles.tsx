import styled from "styled-components";

export const SectionCardStyle = styled.section`
  max-width: 1440px;
  text-align: center;

  & > div {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  @media (min-width: 768px) {
    width: 100%;
    padding: 100px 2rem;
  }
`;
