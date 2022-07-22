import React, { useState } from "react";
import "./search-data.css";
import TextInput from "../components/text-input/text-input";
import SearchResult from "../components/search-result/search-result";
import SelectedItem from "../components/selected-item/selected-item";

const SearchData = () => {
  const [keyword, setKeyword] = useState("");
  const [temp, setTemp] = useState("");
  const [selected, setSelected] = useState(null);

  const handleChange = (e) => {
    setKeyword(e.target.value);
    setSelected(null);
  };

  const handleSelect = (data) => {
    setSelected(data);
    setKeyword("");
    setTemp("");
  };

  const handleHover = (data) => {
    setTemp(data.name);
  };

  return (
    <div>
      <TextInput
        type="text"
        placeholder="Search data here"
        value={temp || keyword}
        handleChange={(e) => handleChange(e)}
      />
      {keyword.length > 0 && !selected && (
        <SearchResult
          keyword={keyword}
          handleSelect={handleSelect}
          handleHover={handleHover}
        />
      )}
      {selected && <SelectedItem item={selected} />}
    </div>
  );
};

export default SearchData;
