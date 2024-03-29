import styled from "styled-components";
import Link from "next/link";
export const ProductCardContainerStyle = styled.div`
  padding: 10px;
  text-align: center;
  border: 3px solid var(--light-grey);
  border-radius: var(--border_radius_small);
  overflow: hidden;
  cursor: pointer;
  position: relative;

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
  z-index: 0;
  display: block;

  & img {
    width: 100%;
    height: 100%;
    transition: scale var(--short-transition);
    object-fit: contain;

    &:hover {
      scale: 1.1;
    }
  }

  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

export const ProductTitleStyle = styled.div`
  font-weight: 900;
  text-transform: uppercase;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 140px;
  margin: auto;
  display: block;

  &:hover {
    white-space: normal;

    &::-webkit-scrollbar {
      height: 1px;
    }
  }

  @media (min-width: 768px) {
    width: 200px;
  }
`;

export const ProductPriceStyle = styled.p`
  font-weight: 600;
  & span {
  }
`;
