import styled from "styled-components";

export const ProductCardContainerStyle = styled.div`
  padding: 10px;
  text-align: center;
  border: 3px solid var(--light-grey);
  border-radius: var(--border_radius_small);
  overflow: hidden;

  & * {
    padding-bottom: 10px;
  }

  @media (min-width: 768px) {
    max-width: 250px;
  }
`;

export const ProductCardImageContainer = styled.div`
  width: 140px;
  height: 140px;

  & img {
    width: 100%;
    height: 100%;
    transition: scale var(--short-transition);

    &:hover {
      scale: 1.1;
    }
  }

  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

export const ProductTitleStyle = styled.p`
  font-weight: 900;
  font-size: 1rem;
  text-transform: uppercase;
`;

export const ProductPriceStyle = styled.div`
  & span {
    font-weight: 900;
  }
`;

export const AddToCartButtonStyle = styled.button`
  background: var(--yellow);
  padding: 0.5rem 2rem;
  border-radius: var(--border_radius_small);
  color: var(--white);

  transition: background var(--short-transition);

  &:hover {
    background: var(--hover-yellow);
  }
`;
