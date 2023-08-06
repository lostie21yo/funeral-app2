// import "../App.css";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


export const Model = ({ name, scale }) => {

    const obj = useLoader(GLTFLoader, name);
    // console.log('Model downloading...', name);
    return <primitive object={obj.scene} scale={scale}/>;
  };
