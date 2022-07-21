import React, { useState } from "react";
import "./search-data.css";
import TextInput from "../components/text-input/text-input";
import SearchResult from "../components/search-result/search-result";

const SearchData = () => {
  const [keyword, setKeyword] = useState("");

  const handleChange = (e) => setKeyword(e.target.value);

  return (
    <div>
      <TextInput
        type="text"
        placeholder="Search data here"
        value={keyword}
        handleChange={(e) => handleChange(e)}
      />
      {keyword.length > 0 && <SearchResult keyword={keyword} />}
    </div>
  );
};

export default SearchData;
