import styled from "styled-components";

export const ShopPageStyles = styled.section`
  & > div {
    & > a {
      margin: 0;
    }
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 2rem;
  width: 100%;
  flex-wrap: wrap;

  & img {
    cursor: pointer;
  }
`;

export const PaginationBtn = styled.button<{ active: boolean }>`
  background: ${({ active }) => (active ? "var(--yellow)" : "(--white)")};
  border: none;
  box-shadow: var(--box_shadow);
  color: var(--black);
  padding: 8px 16px;
  text-transform: capitalize;
  border-radius: 5px;
  cursor: pointer;
`;

export const NotFoundStyle = styled.div`
  padding: 0 2rem;
`;