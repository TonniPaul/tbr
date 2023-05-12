import styled from "styled-components";

export const SearchFilterStyles = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 20px;
  position: relative;

  & > div {
    border-radius: 5px;
    box-shadow: var(--box_shadow);
  }
`;

export const SearchInputStyle = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 0 1rem;
  flex-basis: 400px;
  height: max-content;

  & input {
    width: 100%;
    padding: 1rem;
    outline: none;
    border: none;
    background: var(--white);
    font-family: inherit;
  }
`;

export const FilterByCategoryStyle = styled.div<{ isOpen: boolean }>`
  min-width: 200px;
  position: relative;

  & > div:first-child {
    transition: var(--short-transition);
    display: flex;
    padding: 1rem;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    cursor: pointer;

    & img {
      transition: var(--short-transition);
      transform: rotate(${({ isOpen }) => (isOpen ? "-90deg" : "90deg")});
    }
  }

  & > div:nth-child(2) {
    position: absolute;
    bottom: -135px;
    z-index: 5;
    background: var(--light-grey);
    width: 200px;
    transition: var(--short-transition);

    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};

    & p {
      padding: 0.4rem 1rem;
      text-transform: capitalize;
      cursor: pointer;
      border: 2px solid var(--white);
      transition: var(--short-transition);

      &:last-child {
        padding-bottom: 1rem;
        border-bottom: none;
      }

      &:hover {
        background: var(--black);
        color: var(--white);
      }
    }
  }
`;
