import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from 'three'

export const TestEnvironment = () => {
  const tree1 = useLoader(GLTFLoader, 'terrain/tree1.glb');
  const tree2 = useLoader(GLTFLoader, 'terrain/tree2.glb');
  const sakura = useLoader(GLTFLoader, 'terrain/sakura.glb');
  const radiotower = useLoader(GLTFLoader, 'terrain/radiotower.glb');

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
      {/* <primitive object={tree1.scene} scale={1} position={[-5, 0, 6]} castShadow receiveShadow />
      <primitive object={tree2.scene} scale={0.7} position={[10, 0, 6]} castShadow receiveShadow />
      <primitive object={sakura.scene} scale={0.7} position={[-5, 0, -6]} castShadow receiveShadow />
      <primitive object={radiotower.scene} scale={12} position={[-75, 0, 150]} castShadow receiveShadow /> */}
    </>
  )
};