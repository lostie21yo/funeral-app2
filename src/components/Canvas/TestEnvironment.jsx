import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from 'three'

export const TestEnvironment = () => {
  const test = useLoader(GLTFLoader, 'terrain/tree3.glb');

  return (
    <>
      {/* <primitive object={test.scene} scale={1} position={[0, 0, 0]} castShadow receiveShadow /> */}
    </>
  )
};