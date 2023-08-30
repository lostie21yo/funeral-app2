import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const Terrain = () => {
  const terrain = useLoader(GLTFLoader, "/terrain/terrain.glb");

  return <primitive object={terrain.scene} scale={1} castShadow receiveShadow />;
};
