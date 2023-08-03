import "../App.css";
import { Suspense } from "react";
import { Model, Terrain } from "./Model";
import { OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

// const deg2rad = degrees => degrees * (Math.PI / 180);

// const Scene = () => {
//   useThree(({camera}) => {
//     camera.rotation.set(deg2rad(30), 0, 0);
//   });
  
//   return (
//     <Canvas />
//   );
// };

export const CanvasComponent = ({ currentModel }) => {
  return (
    <div className={"canvas"}>
      <Suspense fallback={<span>loading...</span>}>
        <Canvas onCreated={() => console.log("created")} camera={{ fov: 75, position: [-3, 1.5, -1.5]}}>
          <Model key={currentModel} name={currentModel} />
          <directionalLight />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls />
          {/* <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} /> */}
          <Model key={currentModel} name={currentModel} />
          <Terrain />
          <Environment path="/hdr/" files="lilienstein_2k.hdr" background blur={0.5} />
        </Canvas>
      </Suspense>
    </div>
  );
};
