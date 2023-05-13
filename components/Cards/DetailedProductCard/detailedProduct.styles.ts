import styled from "styled-components";

export const DetailedProductContainer = styled.div`
  padding: 1rem 2rem 2rem;

  & > div {
    @media (min-width: 768px) {
      display: flex;
      justify-content: flex-start;
      gap: 20px;
    }
  }

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

export const GoBackButton = styled.button`
  box-shadow: var(--box_shadow);
  padding: 0.5rem 1rem;
  border-radius: var(--border_radius_small);
  margin-bottom: 1rem;
  color: var(--black);

  & span {
    font-size: 20px;
    font-weight: 900;
  }
`;

export const DetailedProductImage = styled.div`
  height: 400px;
  overflow: hidden;

  & img {
    height: 100%;
    object-fit: cover;
  }
`;

export const DetailedProductDataStyle = styled.div<{ color: string }>`
  padding: 1.5rem 0;
  flex-basis: 400px;

  & > small {
    text-transform: uppercase;
    font-weight: 700;
    color: var(--yellow);
  }

  & > small:nth-of-type(2) {
    color: ${({ color }) => color};
  }

  & > button {
    padding: 0.5rem 2rem;
    margin: 0;
  }

  @media (min-width: 768px) {
    padding: 0;
  }

  & p:nth-of-type(1) {
    font-size: 1.125rem;
    font-weight: 700;
    padding: 0.5rem 0;
  }

  & p {
    padding-bottom: 0.5rem;
  }

  & p:nth-of-type(3) {
    font-weight: 600;
  }
`;

export const PriceStyle = styled.div`
  display: flex;
  justify-content: space-between;
  background: var(--light-grey);
  width: max-content;
  margin-bottom: 1rem;

  & > * {
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }

  & button {
    font-weight: 900 !important;
    color: var(--yellow);
    font-size: 1.125rem;
  }
  & button:hover {
    font-weight: 900 !important;
  }

  & > button:disabled {
    cursor: not-allowed !important;
  }
`;
