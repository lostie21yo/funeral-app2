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
  if (modelList[0] === undefined) { modelList[0] = 'models/01_Брусчатка/Не выбрано.glb' }
  // if(modelList[1] === undefined) {modelList[1] = 'models/2_Надгробия/Не выбрано.glb'}

  // Скриншот стейт
  const [screenshot, setScreenshot] = useState('noscreen');
  const makeScreenshot = (base64) => {
    setScreenshot(base64)
  }

  const addModelToList = (index, path, isMultiple = false) => {
    if (!isMultiple) {
      modelList[index] = path;
    }
    else {
      for (var key in modelList) {
        modelList[key] = '';
      }
      modelList[0] = 'models/01_Брусчатка/Не выбрано.glb'
      // modelList[1] = 'models/2_Надгробия/Не выбрано.glb'
    }
    setModelList(modelList);
    setScreenshot('noscreen')
  };
  
  return (
    <>
      <Panel onChangeModel={handleChangeModel}
        onAddModelToList={addModelToList}
        modelList={modelList}
        screenshot={screenshot}
      />
      <CanvasComponent
        currentModel={currentModel}
        modelList={modelList}
        makeScreenshot={makeScreenshot} />
    </>
  );
}

export default App;
