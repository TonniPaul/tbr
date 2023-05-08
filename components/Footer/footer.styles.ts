import styled from "styled-components";

export const FooterStyles = styled.footer`
  background: var(--black);
  color: var(--white);
  padding: 2rem;
  position: relative;
  overflow: hidden;

  &::before,
  &::after {
    content: "Thrifts By Ronn";
    position: absolute;
    font-size: 30px;
    color: var(--white);
    opacity: 0.08;
    width: max-content;
    font-family: var(--logo-font);
  }
  &::before {
    top: 0px;
    left: 50px;
    transform: rotate(-20deg) translateX(50%) translateY(80%);
  }
  &::after {
    bottom: 100px;
    right: 50px;
    transform: rotate(-20deg) translateX(-50%) translateY(50%);
  }

  & > div {
    max-width: 1440px;
    margin: auto;

    &::before,
    &::after {
      content: "Thrifts By Ronn";
      position: absolute;
      font-size: 30px;
      color: var(--white);
      opacity: 0.08;
      width: max-content;
      font-family: var(--logo-font);
    }
    &::before {
      bottom: 50%;
      right: 50%;
      transform: rotate(-40deg);
    }
    &::after {
      top: 50%;
      left: 50%;
      transform: rotate(-40deg);
    }

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
    padding: 20px 0 10px;

    @media (min-width: 768px) {
      padding-top: 0;
    }
  }

  & div a {
    display: block;
    padding: 5px 0;
    text-transform: capitalize;
  }
`;

export const CopyRightSection = styled.div`
  width: 100%;
  border-top: 1px solid var(--dark-grey);
  margin-top: 2rem !important;
  text-align: center !important;

  & a {
    display: block;
    padding-top: 1rem;
    width: max-content;
    margin: auto;
  }
`;
