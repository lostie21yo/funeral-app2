import "../App.css";

import { useLoader } from "@react-three/fiber";

import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// export const Model = ({ name }) => {
//   const obj = useLoader(OBJLoader, name);
//   // console.log(name, obj);
//   return <primitive object={obj} />;
// };

export const Model = ({ name }) => {
    const obj = useLoader(GLTFLoader, name);
    // console.log(name, obj);
    return <primitive object={obj.scene} />;
  };

export const Terrain = () => {
  const gltf = useLoader(GLTFLoader, "/terrain/terrain.glb");
  return (
    <>
      <primitive object={gltf.scene} scale={0.5} />
    </>
  );
};