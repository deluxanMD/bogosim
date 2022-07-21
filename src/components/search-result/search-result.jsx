import React from "react";
import "./search-result.css";
import { RESULTS } from "../../mock-data/data";

const SearchResult = () => {
  return (
    <div className="SearchResult">
      {RESULTS.map(
        (res) => res.name.includes("200") && <p key={res.name}>{res.name}</p>
      )}
    </div>
  );
};

export default SearchResult;
