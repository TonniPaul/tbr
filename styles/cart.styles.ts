import styled from "styled-components";

export const CartMainContainer = styled.div`
  background: var(--light-grey);
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

  @media (min-width: 550px) {
    flex-basis: 60%;
  }

  & > p:first-child {
    font-size: 17px;
    font-weight: 700;
    padding-bottom: 1rem;
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
  margin-bottom: 0.5rem;

  & p {
    padding: 0.2rem 0;
  }

  & > p:first-child {
    font-weight: 700;
    text-transform: capitalize;
  }

  & button {
    margin-top: 0.5rem;
    padding: 0.5rem !important;
    border-color: var(--red);
    background: var(--red);

    &:hover {
      color: var(--red);
    }

    @media (min-width: 768px) {
      padding: 0.5rem 2rem;
    }
  }
`;

export const EmptyCartStyle = styled.div`
  width: 100%;
  padding: 2rem;
  text-align: center;
  background: var(--white);
  border-radius: var(--border_radius_small);

  & p {
    font-size: 17px;
    padding: 1rem;
  }
`;
