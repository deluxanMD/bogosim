import React from "react";
import FuzzySearch from "react-fuzzy";
import { ItemI } from "../../interface/item";
import { RESULTS } from "../../mock-data/data";

interface IProps {
  getSelectedItem: (item: ItemI) => void;
}

const SearchFuzzy = (props: IProps) => {
  const { getSelectedItem } = props;

  return (
    <FuzzySearch
      list={RESULTS}
      keys={["name"]}
      width={430}
      onSelect={(item: any) => getSelectedItem(item)}
      resultsTemplate={(props: any, state: any, styles: any) => {
        return state.results.map((val: any, i: number) => {
          const style =
            state.selectedIndex === i
              ? styles.selectedResultStyle
              : styles.resultsStyle;
          return (
            <div key={i} style={style} onClick={() => getSelectedItem(val)}>
              {val.name}
            </div>
          );
        });
      }}
    />
  );
};

export default SearchFuzzy;
