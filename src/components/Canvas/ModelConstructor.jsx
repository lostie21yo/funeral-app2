import { useLoader } from "@react-three/fiber";

import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Model } from "./Model";
import { useState } from "react";
import MODELS from "../../assets/models.json";


// var model1 = <Model key={currentModel} name={currentModel} />

export const ModelConstructor = ({ modelList }) => {

  return (
    Object.values(MODELS).map((category) =>
      Object.values(category).map((item) => {
        const name = (item.path + "/" + item.name).split("public/")[1];

        return (
          <Model key={name} name={name} isVisible={Object.values(modelList).includes(name)} />
        );
      })
    )
  );
};

