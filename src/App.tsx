import React, { useState } from "react";
import "./App.css";
import SearchFuzzy from "./components/fuzzy-search/fuzzy-search";
import SelectedItem from "./components/selected-item/selected-item";
import { ItemI } from "./interface/item";

const App = () => {
  const [selectedItem, setSelectedItem] = useState<ItemI | null>(null);

  const handleSelect = (item: ItemI) => setSelectedItem(item);

  return (
    <div className="App">
      <SearchFuzzy getSelectedItem={(item) => handleSelect(item)} />
      <SelectedItem item={selectedItem} />
    </div>
  );
};

export default App;
