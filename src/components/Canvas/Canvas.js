// import "src/App.css";
import { Suspense } from "react";
import "./Canvas.css";
import { OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ModelConstructor } from "./ModelConstructor";
import { Terrain } from "./Terrain";
import Spinner from 'react-bootstrap/Spinner';
import { TestEnvironment } from "./TestEnvironment";


function FullScreenTgl() {
  // const [icon, setIcon] = useState('fs-icon2.png')

  let doc = document, elm = doc.getElementById("canvas");
  
  if (elm.requestFullscreen) {
    (!doc.fullscreenElement ? elm.requestFullscreen() : doc.exitFullscreen())
  }
  else if (elm.mozRequestFullScreen) {
    (!doc.mozFullScreen ? elm.mozRequestFullScreen() : doc.mozCancelFullScreen())
  }
  else if (elm.msRequestFullscreen) {
    (!doc.msFullscreenElement ? elm.msRequestFullscreen() : doc.msExitFullscreen())
  }
  else if (elm.webkitRequestFullscreen) {
    (!doc.webkitIsFullscreen ? elm.webkitRequestFullscreen() : doc.webkitCancelFullscreen())
  }
  else { console.log("Fullscreen support not detected."); }
}



export const CanvasComponent = ({ currentModel, modelList }) => {

  return (
    <div className={"canvas"} id="canvas">
      <Suspense fallback={<div className={"fallback"}><Spinner animation="border" variant="light" /> Loading...</div>}>
      <img src="fullscreen.svg" alt="FS" onClick={FullScreenTgl} className="fs-toggle" />
        <Canvas shadows
          onDoubleClick={FullScreenTgl}
          onCreated={() => console.log("Canvas rendered")}
          camera={{ fov: 75, position: [2.5, 1.3, -1.25] }}>
          <directionalLight intensity={0.7} castShadow />
          
          <pointLight intensity={1} position={[10, 10, 10]} />
          <OrbitControls target={[0, 0.2, 0]} maxPolarAngle={Math.PI * 0.5}
            maxDistance={7} enableDamping={true} />
          {/* <fog attach="fog" args={["#d0d0d0", 5, 20]} /> */}
          <Terrain />
          <TestEnvironment/>
          <ModelConstructor castShadow receiveShadow modelList={modelList} />
          <Environment path="/hdr/" files="lilienstein_2k.hdr" background />
        </Canvas>
      </Suspense>
    </div>
  );
};
