// import "src/App.css";
import { Suspense } from "react";
import "./Canvas.css";
import { OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ModelConstructor } from "./ModelConstructor";
import { Terrain } from "./Terrain";
import Spinner from 'react-bootstrap/Spinner';


export const CanvasComponent = ({ currentModel, modelList }) => {


  return (
    <div className={"canvas"}>
      <Suspense fallback={<div className={"fallback"}><Spinner animation="border" variant="light"/> Loading...</div>}> 
        <Canvas shadows 
          onCreated={() => console.log("Canvas rendered")}
          camera={{ fov: 75, position: [2.5, 1.3, -1.25] }}>
          <directionalLight castShadow />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls target={[0, 0.2, 0]} maxPolarAngle={Math.PI * 0.50}
            maxDistance={10} enableDamping={true} />
          {/* <fog attach="fog" args={["#d0d0d0", 5, 20]} /> */}
          <Terrain name={"/terrain/terrain.glb"} scale={0.5} />
          <ModelConstructor castShadow receiveShadow modelList={modelList} />
          <Environment path="/hdr/" files="lilienstein_2k.hdr" background />
        </Canvas>
      </Suspense>
    </div>
  );
};
