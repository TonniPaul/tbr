import styled from "styled-components";

export const CartMainContainer = styled.div`
  background: var(--light-grey);
  min-height: calc(100vh - 105px);

  padding: 1rem;

  @media (min-width: 600px) {
    display: flex;
    gap: 20px;
    justify-content: center;
  }

  @media (min-width: 768px) {
    padding: 1rem;
  }
`;

export const CartItemsContainer = styled.div`
  background: var(--white);
  flex-basis: 100%;
  padding: 1rem;
  border-radius: var(--border_radius_small);
  position: relative;
  height: max-content;
  max-width: 1440px;

  @media (min-width: 550px) {
    flex-basis: 60%;
  }

  & > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1rem;

    & > p {
      font-size: 17px;
      font-weight: 700;
    }

    & button {
      margin: 0;
    }
  }
`;

export const CartItems = styled.div`
  display: flex;
  gap: 20px;
  padding: 1rem 0;
  border-top: 3px solid var(--light-grey);
`;

export const CartImageContainer = styled.div`
  width: 110px;
  height: 110px;
  border-radius: var(--border_radius_small);
  overflow: hidden;
  padding: 5px;
  border: 3px solid var(--light-grey);

  & img {
    height: 100%;
    aspect-ratio: 1/1;
    transition: scale var(--short-transition);

    &:hover {
      scale: 1.1;
    }
  }

  @media (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

export const CartItemsData = styled.div`
  align-self: flex-end;

  & > * {
    margin-bottom: 0.5rem;
  }

  & p {
    padding: 0.2rem 0;
    margin: 0 !important;
  }

  & > p:first-child {
    font-weight: 700;
    text-transform: capitalize;
  }

  & > button {
    @media (min-width: 768px) {
      padding: 0.5rem 2rem;
      /* background: green !important; */
    }
  }
`;

export const EmptyCartStyle = styled.div`
  width: 100%;
  height: max-content;
  padding: 2rem;
  text-align: center;
  background: var(--white);
  border-radius: var(--border_radius_small);
  align-items: center;

  & p {
    font-size: 17px;
    padding: 1rem;
  }
`;

export const ConfirmRemoveContainer = styled.div`
  display: flex;
  gap: 10px;
`;