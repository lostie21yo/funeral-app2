import React, { useState } from "react";
import "./Panel.css";
import { Header } from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from "./Footer";
import FilterMST from "./FilterMST";


export const Panel = ({ onChangeModel, onAddModelToList, modelList, screenshot }) => {

  const [FIOcount, setFIOcount] = useState('1');
  const changeFIOcount = (count) => {
    // console.log(FIOcount)
    setFIOcount(count)
  }
  
  return (
    <div className={"panel"}>
      <Header />
      <FilterMST onChangeModel={onChangeModel}
          onAddModelToList={onAddModelToList} 
          onChangeFIOcount={changeFIOcount}/>
      <Footer modelList={modelList} 
          screenshot={screenshot}
          FIOcount={FIOcount}/>
    </div>
  );
};
