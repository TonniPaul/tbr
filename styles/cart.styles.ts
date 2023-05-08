import styled from "styled-components";

export const CartMainContainer = styled.div`
  background: var(--light-grey);
  padding: 2rem;

  @media (min-width: 768px) {
    display: flex;
    gap: 20px;
  }
`;

export const CartItemsContainer = styled.div`
  background: var(--white);
  flex-basis: 100%;
  padding: 1rem 2rem;

  & p:first-child {
    font-size: 17px;
    font-weight: 700;
    padding-bottom: 1rem;
    border-bottom: 2px solid var(--light-grey);
  }

  & > div {
    padding: 2rem 0;
  }
`;

export const CartItems = styled.div`
  display: flex;
  gap: 20px;
`;

export const CartImageContainer = styled.div`
  width: 150px;
  height: 150px;

  & img {
    height: 100%;
    aspect-ratio: 1/1;
  }
`;

export const CartItemsData = styled.div`
  & p:first-child {
    font-weight: 700;
    text-transform: capitalize;
    padding: 0.3rem 0;
  }

  & button {
    margin-top: 0.5rem;
  }
`;
