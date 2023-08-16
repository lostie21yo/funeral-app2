import React, { useState } from 'react';
import "./App.css";
import { Panel } from "./components/Panel/Panel";
import { CanvasComponent } from "./components/Canvas/Canvas";


function App() {

  const [currentModel, setCurrentModel] = useState();
  const handleChangeModel = (name) => {
    setCurrentModel(name);
  };

  const [modelList, setModelList] = useState({}); // "-1": "/models/example.glb"

  const addModelToList = (index, path) => {
      modelList[index] = path;
      // console.log('added', Object.keys(modelList), Object.values(modelList))
    setModelList(modelList);
  };



  return (
    <>
      <Panel onChangeModel={handleChangeModel} onAddModelToList={addModelToList} />
      <CanvasComponent currentModel={currentModel} modelList={modelList} />
    </>
  );
}

export default App;
