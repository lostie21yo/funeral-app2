import React from "react";
import "./Panel.css";
import { Header } from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from "./Footer";
import Filter from "./Filter";



export const Panel = ({ onChangeModel, onAddModelToList,  }) => {
  // console.log(MODELS)
  // console.log(Object.keys(MODELS))
  return (
    <div className={"panel"}>
      <Header />
      <Filter onChangeModel={onChangeModel}
        onAddModelToList={onAddModelToList} />
      <Footer />
    </div>
  );
};
