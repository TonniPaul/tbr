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
  padding-right: 10px;
  position: relative;
  cursor: pointer;
  width: max-content;

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
    z-index: 1;
  }
`;
