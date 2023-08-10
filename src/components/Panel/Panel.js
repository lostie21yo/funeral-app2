import React from "react";
import "./Panel.css";
import { Header } from "./Header";
import { CustomAccordion } from "./CustomAccordion";
import 'bootstrap/dist/css/bootstrap.min.css';



export const Panel = ({ onChangeModel, onAddModelToList, onDeleteModelFromList }) => {
  // console.log(MODELS)
  // console.log(Object.keys(MODELS))
  return (
    <div className={"panel"}>
      <Header />
      <div className="scrollbar scrollbar-primary" style={{border: '', height: '80%'}}>
        <CustomAccordion
          onChangeModel={onChangeModel}
          onAddModelToList={onAddModelToList}
          onDeleteModelFromList={onDeleteModelFromList} />
      </div>
    </div>
  );
};
