import React, {useState} from 'react';
import "./App.css";
import { Panel } from "./components/Panel/Panel";
import { CanvasComponent } from "./components/Canvas/Canvas";



function App() {
  const [currentModel, setCurrentModel] = useState(
    "/models/example.glb"
  );
  const handleChangeModel = (name) => {
    setCurrentModel(name);
  };
  
  return (
    <>
      <Panel onChangeModel={handleChangeModel} />
      <CanvasComponent key={currentModel} currentModel={currentModel} />
    </>
  );
} 

export default App;
