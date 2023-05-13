import styled from "styled-components";

export const TestimonyContainer = styled.section`
  background: var(--light-grey);
  text-align: center;
  position: relative;
  overflow-y: visible;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 40%;
    height: 50px;
    z-index: 1;
    background: var(--light-grey);
    z-index: -1;
    border-top-right-radius: 500px;
    border-top-left-radius: 500px;

    @media (min-width: 768px) {
      height: 80px;
    }
  }

  &::before {
    left: 0;
    top: -30px;
    transform: rotate(30deg);

    @media (min-width: 768px) {
      transform: rotate(20deg);
    }
  }

  &::after {
    top: -30px;
    right: 0;
    transform: rotate(-30deg);

    @media (min-width: 768px) {
      transform: rotate(-20deg);
    }
  }

  & p {
    font-style: italic;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 60%;
      height: 70px;
      z-index: 1;
      background: var(--red) !important;
      z-index: 1;
      border-radius: 50%;
      transform: translateX(-50%);
    }

    &::before {
      top: -40px;
      left: 50%;
    }

    &::after {
      bottom: -25px;
      left: 50%;
    }
  }

  & > div {
    display: flex;
    align-items: center;
    max-width: 1440px;
    padding: 1rem 0;
    gap: 20px;
    flex-wrap: nowrap;
    overflow: scroll;
    width: 90%;
    margin: auto;

    &::-webkit-scrollbar {
      height: 2px;
      width: 0;
    }
    &::-webkit-scrollbar-thumb {
      background: var(--yellow);
    }
    & > div {
      min-width: 250px;
      aspect-ratio: 1/1;
      background: #151e2b;

      & img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
