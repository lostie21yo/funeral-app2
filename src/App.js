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

  const addModelToList = (index, path, isMultiple = false) => {
    if (!isMultiple) {
      modelList[index] = path;
    }
    else {
      for (var key in modelList) {
        modelList[key] = '';
      }
    }
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
