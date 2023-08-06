import React from "react";
import "./Panel.css";
import json from "../../assets/models.json";
import { Row } from "./Row";

const MODELS = json;

export const Panel = ({ onChangeModel, onAddModelToList }) => {
  // console.log(MODELS)
  // console.log(Object.keys(MODELS))
  return (
    <div className={"panel"}>
      {Object.keys(MODELS).map((model, index) => (
        <Row
          name={model}
          key={index}
          files={MODELS[model]}
          onChangeModel={onChangeModel}
          onAddModelToList = {onAddModelToList}
          classIndex = {index}
        />
      ))}
    </div>
  );
};
