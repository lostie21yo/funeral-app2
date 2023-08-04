import "../App.css";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


export const Model = ({ name }) => {
    const obj = useLoader(GLTFLoader, name);
    // console.log(name, obj);
    return <primitive object={obj.scene} />;
  };
