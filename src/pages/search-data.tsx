import React, { useState, FormEvent } from "react";
import "./search-data.css";
import TextInput from "../components/text-input/text-input";
import SearchResult from "../components/search-result/search-result";
import SelectedItem from "../components/selected-item/selected-item";
import { ItemI } from "../interface/item";

const SearchData = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [temp, setTemp] = useState<string>("");
  const [selected, setSelected] = useState<ItemI | null>(null);

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setKeyword((e.target as HTMLInputElement).value);
    setSelected(null);
  };

  const handleSelect = (data: ItemI) => {
    setSelected(data);
    setKeyword("");
    setTemp("");
  };

  const handleHover = (data: ItemI) => {
    setTemp(data.name);
  };

  return (
    <div>
      <TextInput
        type="text"
        placeholder="Search data here"
        value={temp || keyword}
        handleChange={(e: FormEvent<HTMLInputElement>) => handleChange(e)}
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
