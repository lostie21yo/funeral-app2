import React from "react";
import "./Panel.css";
import { Menu } from "./Menu";
import { Header } from "./Header";


export const Panel = ({ onChangeModel, onAddModelToList, onDeleteModelFromList }) => {
  // console.log(MODELS)
  // console.log(Object.keys(MODELS))
  return (
    <div className={"panel"}>
      <Header />
      <Menu
        onChangeModel={onChangeModel}
        onAddModelToList={onAddModelToList}
        onDeleteModelFromList={onDeleteModelFromList} />
    </div>
  );
};
