import React from "react";
import "./search-result.css";
import { RESULTS } from "../../mock-data/data";
import { ItemI } from "../../interface/item";

interface IProps {
  keyword: string;
  handleSelect: (item: ItemI) => void;
  handleHover: (item: ItemI) => void;
}

const SearchResult = (props: IProps) => {
  const { keyword, handleSelect, handleHover } = props;

  return (
    <div className="SearchResult">
      {RESULTS.map(
        (res: ItemI) =>
          res.name.toLowerCase().includes(keyword.toLowerCase()) && (
            <p
              key={res.name}
              onClick={() => handleSelect(res)}
              onMouseEnter={() => handleHover(res)}
            >
              {res.name}
            </p>
          )
      )}
    </div>
  );
};

export default SearchResult;
