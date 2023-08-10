import React from "react";
import "./Panel.css";
import { Menu } from "./Menu";
import { Header } from "./Header";
import { CustomAccordion } from "./CustomAccordion";


export const Panel = ({ onChangeModel, onAddModelToList, onDeleteModelFromList }) => {
  // console.log(MODELS)
  // console.log(Object.keys(MODELS))
  return (
    <div className={"panel"}>
      <Header />
      <CustomAccordion
        onChangeModel={onChangeModel}
        onAddModelToList={onAddModelToList}
        onDeleteModelFromList={onDeleteModelFromList} />
      {/* <Menu
        onChangeModel={onChangeModel}
        onAddModelToList={onAddModelToList}
        onDeleteModelFromList={onDeleteModelFromList} /> */}
    </div>
  );
};
