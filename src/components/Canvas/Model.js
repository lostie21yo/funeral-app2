// import "../App.css";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


export const Model = ({ name, scale, isVisible }) => {

    const obj = useLoader(GLTFLoader, name);
    // console.log('Model downloading...', name);
    return isVisible ? <primitive object={obj.scene} scale={scale}/> : null;
  };
