import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from 'three'

export const Terrain = () => {
  const terrain = useLoader(GLTFLoader, "/terrain/terrain2.glb");
  // const test = useLoader(GLTFLoader, '');

  // const dirLight = new THREE.DirectionalLight(0xffffff, 1);
  // dirLight.position.set(- 3, 10, - 10);
  // dirLight.castShadow = true;
  // dirLight.shadow.camera.top = 2;
  // dirLight.shadow.camera.bottom = - 2;
  // dirLight.shadow.camera.left = - 2;
  // dirLight.shadow.camera.right = 2;
  // dirLight.shadow.camera.near = 0.1;
  // dirLight.shadow.camera.far = 40;

  return (
    <>
      <primitive object={terrain.scene} scale={1} castShadow receiveShadow />;
      {/* <primitive object={test.scene} scale={scale} castShadow receiveShadow />; */}
    </>

  )
};
