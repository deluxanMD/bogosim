import React, { useState } from "react";
import TextInput from "../components/text-input";

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
    </div>
  );
};

export default SearchData;
