import React from "react";
import "./styles.css";
import json from "../../assets/models.json";
import { Row } from "./Row";

const MODELS = json;

export const Panel = ({ onChangeModel }) => {
  return (
    <div className={"panel"}>
      {Object.keys(MODELS).map((model, index) => (
        <Row
          name={model}
          key={index}
          files={MODELS[model]}
          onChangeModel={onChangeModel}
        />
      ))}
    </div>
  );
};
