// import "src/App.css";
import { Suspense } from "react";
import { Model } from "./Model";
import "./Canvas.css";
import { OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ModelConstructor } from "./ModelConstructor";
import { Terrain } from "./Terrain";


export const CanvasComponent = ({ currentModel, modelList }) => {


  return (
    <div className={"canvas"}>
      <Suspense fallback={<div className={"fallback"}>loading...</div>}>
        <Canvas onCreated={() => console.log("Canvas rendered")} camera={{ fov: 75, position: [2.5, 1.3, -1.25] }}>
          <directionalLight />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls target={[0, 0.2, 0]} maxPolarAngle={Math.PI * 0.50} maxDistance={10} enableDamping={true} />
          <Terrain name={"/terrain/terrain.glb"} scale={0.5} />
          {
            Object.values(modelList).map((model) => (
              <Model key={model} name={model} />
            ))
          }
          {/* <Model key={currentModel} name={currentModel} /> */}
          {/* <ModelConstructor list={modelList} /> */}
          <Environment path="/hdr/" files="lilienstein_2k.hdr" background />
        </Canvas>
      </Suspense>
    </div>
  );
};
