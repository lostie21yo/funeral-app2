// import "src/App.css";
import { Suspense } from "react";
import { Model } from "./Model";
import "./Canvas.css";
import { OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";


export const CanvasComponent = ({ currentModel }) => {
  return (
    <div className={"canvas"}>
      <Suspense fallback={<div className={"fallback"}>loading...</div>}>
        <Canvas onCreated={() => console.log("Canvas rendered")} camera={{ fov: 75, position: [3, 1.5, 1.5]}}>
          <directionalLight />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls />
          <Model name={"/terrain/terrain.glb"} />
          <Model key={currentModel} name={currentModel} />
          <Environment path="/hdr/" files="lilienstein_2k.hdr" background />
        </Canvas>
      </Suspense>
    </div>
  );
};
