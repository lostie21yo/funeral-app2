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
        <Canvas onCreated={() => console.log("Canvas rendered")} camera={{ fov: 75, position: [2.5, 1.3, -1.25]}}>
          <directionalLight />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls target={[0, 0.2, 0]} maxPolarAngle={Math.PI * 0.50} maxDistance={10} enableDamping={true}/>
          <Model name={"/terrain/terrain.glb"} scale={0.5}/>
          <Model key={currentModel} name={currentModel} />
          <Environment path="/hdr/" files="lilienstein_2k.hdr" background />
        </Canvas>
      </Suspense>
    </div>
  );
};
