import styled from "styled-components";

export const FooterStyles = styled.footer`
  background: var(--black);
  color: var(--white);
  padding: 2rem 0;

  & > div {
    max-width: 1440px;
    margin: auto;

    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
    }
  }
  @media (min-width: 768px) {
    padding: 4rem 2rem 2rem;
  }
`;

export const TBRDataSection = styled.div`
  flex-basis: 35%;

  & p {
    padding: 10px 0;
  }
`;

export const SocialLinksContainer = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    justify-content: center;
  }

  & > a {
    filter: var(--white-filter);

    & > div {
      width: 20px;

      & > img {
        aspect-ratio: 1/1;
      }
    }
  }
`;

export const FooterSections = styled.div`
  & p {
    font-size: 17px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 10px 0;

    @media (min-width: 768px) {
      padding-top: 0;
    }
  }

  & div a {
    display: block;
    padding: 5px 0;
  }
`;

export const CopyRightSection = styled.div`
  & a {
    border-top: 1px solid var(--light-grey);
    padding-top: 1rem;
    width: 100%;
    margin-top: 2rem;
    text-align: center;
  }
`;
