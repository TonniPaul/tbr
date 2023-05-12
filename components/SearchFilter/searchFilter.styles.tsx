import styled from "styled-components";

export const SearchFilterStyles = styled.span`
  display: flex;
  justify-content: space-between !important;
  margin: 0 auto 2rem;
  width: 90% !important;
`;

export const SearchInputStyle = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  box-shadow: var(--box_shadow);
  padding: 0 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;

  & input {
    width: 100%;
    padding: 1rem;
    outline: none;
    border: none;
    background: var(--white);
    font-family: inherit;
    font-size: 0.9rem;
  }
`;

export const FilterByCategoryStyle = styled.div`
  display: flex;
  align-items: center;
  box-shadow: var(--box_shadow);
  padding-right: 1rem;
  position: relative;
  cursor: pointer;
  width: max-content;
  cursor: pointer;
  border-radius: 5px;
  position: relative;
  z-index: 2;

  & > img {
    transform: rotate(90deg);
    position: absolute;
    z-index: 2;
    right: 1rem;
  }

  & select {
    padding: 0.5rem;
    padding-right: 3rem;
    outline: none;
    border: none;
    font-family: inherit;
    font-size: inherit;
    border-radius: 5px;
    background: var(--white);
    color: var(--black);
    --webkit-appearance: none;
    appearance: none;
    z-index: 2;
    width: 100%;
  }
`;
