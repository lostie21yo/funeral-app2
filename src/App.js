import React, { useState } from 'react';
import "./App.css";
import { Panel } from "./components/Panel/Panel";
import { CanvasComponent } from "./components/Canvas/Canvas";


function App() {

  const [currentModel, setCurrentModel] = useState();
  const handleChangeModel = (name) => {
    setCurrentModel(name);
  };

  const [modelList, setModelList] = useState({});
  if(modelList[1] === undefined) {modelList[1] = 'models/2_Надгробия/Не выбрано.glb'}
  if(modelList[0] === undefined) {modelList[0] = 'models/1_Облицовка/Не выбрано.glb'}


  const addModelToList = (index, path, isMultiple = false) => {
    if (!isMultiple) {
      modelList[index] = path;
    }
    else {
      for (var key in modelList) {
        modelList[key] = '';
      }
      modelList[1] = 'models/2_Надгробия/Не выбрано.glb'
      modelList[0] = 'models/1_Облицовка/Не выбрано.glb'
    }
    setModelList(modelList);
  };

  console.log(modelList)

  return (
    <>
      <Panel onChangeModel={handleChangeModel} onAddModelToList={addModelToList} />
      <CanvasComponent currentModel={currentModel} modelList={modelList} />
    </>
  );
}

export default App;
