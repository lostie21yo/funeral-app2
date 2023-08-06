import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


export const Terrain = ({ name, scale }) => {
    const terrain = useLoader(GLTFLoader, name);
    // console.log('Terrain downloading...', name);
    return <primitive object={terrain.scene} scale={scale}/>;
  };
