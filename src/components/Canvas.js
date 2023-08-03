import "../App.css";
import { Suspense } from "react";
import { Model } from "./Model";
import { OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export const CanvasComponent = ({ currentModel }) => {
  return (
    <div className={"canvas"}>
      <Suspense fallback={<span>loading...</span>}>
        <Canvas onCreated={() => console.log("created")}>
          <directionalLight />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls />
          {/* <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} /> */}
          <Model key={currentModel} name={currentModel} />
          <Environment path="/hdr/" files="scythian_tombs_2_4k.hdr" background blur={0.5} />
        </Canvas>
      </Suspense>
    </div>
  );
};
