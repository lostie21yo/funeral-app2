import "../App.css";

import { useLoader } from "@react-three/fiber";

import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

export const Model = ({ name }) => {
  const obj = useLoader(OBJLoader, name);
  console.log(name, obj);
  return <primitive object={obj} />;
};
