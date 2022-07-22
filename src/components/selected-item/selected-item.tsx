import React from "react";
import "./selected-item.css";
import { ItemI } from "../../interface/item";

interface IProps {
  item: ItemI | null;
}

const SelectedItem = (props: IProps) => {
  const { item } = props;

  return (
    item && (
      <div className="SelectedItem">
        <h1>Search Result</h1>
        <p>
          <strong>Amount unit: </strong>
          {item.amountUnit}
        </p>
        <p>
          <strong>Amount value: </strong>
          {item.amountValue}
        </p>
        <p>
          <strong>PZN: </strong>
          {item.pzn}
        </p>
        <p>
          <strong>Name: </strong>
          {item.name}
        </p>
        <p>
          <strong>Stength unit: </strong>
          {item.strengthUnit}
        </p>
        <p>
          <strong>Stength value: </strong>
          {item.strengthValue}
        </p>
      </div>
    )
  );
};

export default SelectedItem;
