import React from "react";
import "./search-result.css";
import { RESULTS } from "../../mock-data/data";

const SearchResult = ({ keyword, handleSelect, handleHover }) => {
  return (
    <div className="SearchResult">
      {RESULTS.map(
        (res) =>
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
