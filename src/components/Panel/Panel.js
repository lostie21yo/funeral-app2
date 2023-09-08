import React from "react";
import "./Panel.css";
import { Header } from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from "./Footer";
import FilterMST from "./FilterMST";


export const Panel = ({ onChangeModel, onAddModelToList, modelList }) => {
  
  return (
    <div className={"panel"}>
      <Header />
      <FilterMST onChangeModel={onChangeModel}
        onAddModelToList={onAddModelToList} />
      <Footer modelList={modelList} />
    </div>
  );
};
