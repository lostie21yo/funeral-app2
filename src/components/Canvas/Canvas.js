// import "src/App.css";
import { Suspense } from "react";
import "./Canvas.css";
import { OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ModelConstructor } from "./ModelConstructor";
import { Terrain } from "./Terrain";
import Spinner from 'react-bootstrap/Spinner';
import { useThree } from '@react-three/fiber'
import { useControls, button } from 'leva'

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
  else { console.log("Полноэкранный режим не поддерживается!"); }
}

const Screenshot = ({ makeScreenshot }) => {
  const gl = useThree((state) => state.gl)
  // const link = document.getElementById("make_order_btn")

  useControls({
    Снимок: button(() => {
      // link.setAttribute('download', 'canvas.png')
      const link = document.createElement('a')
      const base64 = gl.domElement.toDataURL('image/png').replace('image/png', 'image/octet-stream')
      console.log('Screenshot is ready')
      makeScreenshot(base64)
      // link.setAttribute('href', gl.domElement.toDataURL('image/png').replace('image/png', 'image/octet-stream'))
      link.click()
    })
  })

  // const camera1 = useThree((state) => state.camera)
  // // camera1.position.set(2.2, 1.3, -1.25)

  // const base64 = gl.domElement.toDataURL('image/png').replace('image/png', 'image/octet-stream')
  // console.log('SS maded')
  // makeScreenshot(base64)
}


export const CanvasComponent = ({ currentModel, modelList, makeScreenshot }) => {

  return (
    <div className="canvas" id="canvas">
      <Suspense fallback={<div className={"fallback"}><Spinner animation="border" variant="light" /> Loading...</div>}>
        <img src="fullscreen.svg" alt="FS" onClick={FullScreenTgl} className="fs-toggle" />
        <Canvas id={"canvas1"}
          gl={{ preserveDrawingBuffer: true }}
          onDoubleClick={FullScreenTgl}
          onCreated={() => console.log("Canvas rendered")}
          camera={{ fov: 75, position: [2.2, 1.0, -1.25] }}>
          <Terrain />
          <directionalLight intensity={0.7} castShadow />
          <pointLight intensity={1} position={[10, 10, 10]} />
          <ModelConstructor castShadow receiveShadow modelList={modelList} />
          <OrbitControls target={[0, 0.2, 0]} maxPolarAngle={Math.PI * 0.49}
            maxDistance={7} enableDamping={true} />
          <Environment path="/hdr/" files="lilienstein_2k.hdr" background />
          <Screenshot makeScreenshot={makeScreenshot} />
        </Canvas>
      </Suspense>
      {/* <Leva flat/> */}
    </div>
  );
};

