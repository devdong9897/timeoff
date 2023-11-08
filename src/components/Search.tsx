import React, { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { SearchWrap } from "../styles/SearchStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleValueText = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <SearchWrap>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="search-bar"
            placeholder="테마를 선정하여 여행 해보세요."
            value={searchValue}
            onChange={handleValueText}
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="font-awesome" />
        </div>
      </form>
    </SearchWrap>
  );
};

export default Search;
