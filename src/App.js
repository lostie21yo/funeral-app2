import React, {useState} from 'react';
import "./App.css";
import { Panel } from "./components/Panel/Panel";
import { CanvasComponent } from "./components/Canvas/Canvas";



function App() {
  
  const [currentModel, setCurrentModel] = useState("/models/example.glb");
  
  const handleChangeModel = (name) => {
    setCurrentModel(name);
  };

  const [modelList, setModelList] = useState({}); // "-1": "/models/example.glb"

  
  const addModelToList = (index, path) => {
    modelList[index] = path;
    setModelList(modelList);
  };

  // const deleteModelFromList = (index, path) => {
  //   modelList.classIndex = -1;
  //   modelList.modelPath = '';
  //   setModelList(modelList);
  // };
  
  
  return (
    <>
      <Panel onChangeModel={handleChangeModel} onAddModelToList={addModelToList}/>
      <CanvasComponent currentModel={currentModel} modelList={modelList} />
    </>
  );
} 

export default App;
