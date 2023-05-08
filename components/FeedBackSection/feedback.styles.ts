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

    @media (min-width: 768px) {
      height: 90px;
    }
  }

  &::before {
    left: 0;
    top: -30px;
    border-top-right-radius: 500px;
    border-top-left-radius: 500px;
    transform: rotate(20deg);
  }

  &::after {
    top: -30px;
    right: 0;
    border-top-left-radius: 500px;
    border-top-right-radius: 500px;
    transform: rotate(-20deg);
  }

  & p {
    font-style: italic;

    &::before {
      content: "";
      position: absolute;
      width: 50%;
      height: 70px;
      z-index: 1;
      background: var(--light-grey);
      z-index: 1;
      border-radius: 50%;
      top: -40px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  & > div {
    display: flex;
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
    }
  }
`;
