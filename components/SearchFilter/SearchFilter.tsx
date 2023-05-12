import React, { useState, useRef } from "react";
import {
  FilterByCategoryStyle,
  SearchFilterStyles,
  SearchInputStyle,
} from "./searchFilter.styles";
import Image from "next/image";

interface InputProps {
  onChange: (searchValue: string, filterValue: string) => void;
  handleFilterByCategory: (filterValue: string) => void;
}

const SearchFilter = ({ onChange, handleFilterByCategory }: InputProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const optionRef = useRef<HTMLOptionElement>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    onChange(e.target.value, filterValue);
  };

  const handleOptionClick = () => {
    if (optionRef.current) optionRef.current.focus();
  };

  const handleSelectedFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterValue(e.target.value);
    handleFilterByCategory(e.target.value);
    setSearchValue("");
    onChange(searchValue, e.target.value);
  };

  return (
    <SearchFilterStyles className="input_main_container">
      <SearchInputStyle>
        <Image
          src="/assets/search.png"
          alt="search-icon"
          className="search_icon"
          width={17}
          height={17}
        />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search product..."
          onChange={handleSearch}
          value={searchValue}
        />
      </SearchInputStyle>

      <FilterByCategoryStyle>
        <select
          name="category"
          id="category"
          onChange={handleSelectedFilter}
          value={filterValue}
          //  ref={optionRef}
        >
          <option value="All" hidden ref={optionRef}>
            Filter by Category
          </option>
          <option value="All">All Products</option>
          <option value="Bags">Bags</option>
          <option value="Gowns">Gowns</option>
          <option value="Skirts">Skirts</option>
          <option value="Shirts">Shirts</option>
          <option value="Accessories">Accessories</option>
          <option value="Book">Book</option>
        </select>
        <Image
          src="/assets/next.png"
          alt="dropdown"
          width={16}
          height={16}
          onClick={handleOptionClick}
        />
      </FilterByCategoryStyle>
    </SearchFilterStyles>
  );
};

export default SearchFilter;
