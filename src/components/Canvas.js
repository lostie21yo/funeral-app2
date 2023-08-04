import "../App.css";
import { Suspense } from "react";
import { Model } from "./Model";
import { OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Box from "./Box";



export const CanvasComponent = ({ currentModel }) => {
  return (
    <div className={"canvas"}>
      <Suspense fallback={<div style={{padding: "30% 50%", fontSize: 24 }}>loading...</div>}>
        <Canvas onCreated={() => console.log("created")} camera={{ fov: 75, position: [-3, 1.5, -1.5]}}>
          <directionalLight />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls />
          {/* <Box position={[-1.2, 0, 0]} /> */}
          <Model name={"/terrain/terrain.glb"} />
          <Model key={currentModel} name={currentModel} />
          <Environment path="/hdr/" files="lilienstein_2k.hdr" background />
        </Canvas>
      </Suspense>
    </div>
  );
};
