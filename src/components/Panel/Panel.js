import React from "react";
import "./Panel.css";
import { Header } from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from "./Footer";
import { CustomAccordion2 } from "./CustomAccordion2";



export const Panel = ({ onChangeModel, onAddModelToList, onDeleteModelFromList }) => {
  // console.log(MODELS)
  // console.log(Object.keys(MODELS))
  return (
    <div className={"panel"}>
      <Header />
      <div className="scrollbar scrollbar-primary">
          <CustomAccordion2
            onChangeModel={onChangeModel}
            onAddModelToList={onAddModelToList}
            onDeleteModelFromList={onDeleteModelFromList} />
      </div>
      <hr className="hr"/>
      <Footer/>
    </div>
  );
};
