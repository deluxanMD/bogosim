import React from "react";
import "./fuzzy-search.css";
import FuzzySearch from "react-fuzzy";
import { ItemI } from "../../interface/item";
import { RESULTS } from "../../mock-data/data";

interface IProps {
  getSelectedItem: (item: ItemI) => void;
}

interface IState {
  isOpen: boolean;
  results: ItemI[];
  selectedIndex: number;
  value: string;
}

const SearchFuzzy = (props: IProps) => {
  const { getSelectedItem } = props;

  const handleSelect = (item: ItemI, state: IState) => {
    getSelectedItem(item);
    state.value = "";
    state.results = [];
  };

  const handleMouseEnter = (item: ItemI, state: IState) => {
    state.value = item.name;
  };

  return (
    <FuzzySearch
      autoFocus={true}
      list={RESULTS}
      keys={["name"]}
      width={600}
      maxResults={100}
      onSelect={() => console.log("selected")}
      resultsTemplate={(props: any, state: any, styles: any) => {
        return state.results.map((val: any, i: number) => {
          const style =
            state.selectedIndex === i
              ? styles.selectedResultStyle
              : styles.resultsStyle;
          return (
            <div
              key={i}
              style={style}
              onClick={() => handleSelect(val, state)}
              onMouseEnter={() => handleMouseEnter(val, state)}
              className="fuzzy-search-item"
            >
              {val.name}
            </div>
          );
        });
      }}
    />
  );
};

export default SearchFuzzy;
