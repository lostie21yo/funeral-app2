import "../App.css";

import { useLoader } from "@react-three/fiber";

import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Model } from "./Model";


export const ModelConstructor = ({ currentModel }) => {

  return  <Model key={currentModel} name={currentModel} />;
  };

