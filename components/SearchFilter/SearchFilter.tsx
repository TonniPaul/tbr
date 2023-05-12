import React, { useState } from "react";
import {
  FilterByCategoryStyle,
  SearchFilterStyles,
  SearchInputStyle,
} from "./searchFilter.styles";
import Image from "next/image";

const myProductCategories = [
  { category: "bag" },
  { category: "Gowns" },
  { category: "Top" },
  { category: "Trouser" },
];

interface InputProps {
  onChange: (searchValue: string, filterValue: string) => void;
  handleFilterByCategory: (filterValue: string) => void;
}

const SearchFilter = ({ onChange, handleFilterByCategory }: InputProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);

  const handleDropDownClick = () => {
    setIsDropDownOpen((prev) => !prev);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    onChange(e.target.value, filterValue);
  };

  const handleSelectedFilter = (filterValue: string) => {
    setFilterValue(filterValue);
    handleFilterByCategory(filterValue);
    setSearchValue("");
    setIsDropDownOpen(false);
  };

  return (
    <SearchFilterStyles>
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

      <FilterByCategoryStyle isOpen={isDropDownOpen}>
        <div onClick={handleDropDownClick}>
          <p>Filter by category:</p>
          <Image src="/assets/next.png" alt="dropdown" width={16} height={16} />
        </div>
        {isDropDownOpen && (
          <div>
            {myProductCategories.map((data) => (
              <p
                key={data.category}
                onClick={() => handleSelectedFilter(data.category)}
              >
                {data.category}
              </p>
            ))}
          </div>
        )}
      </FilterByCategoryStyle>
    </SearchFilterStyles>
  );
};

export default SearchFilter;
