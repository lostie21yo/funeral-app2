import { useState } from "react";
import "./App.css";
import { Panel } from "./components/Panel/Panel";

import { CanvasComponent } from "./components/Canvas";

function App() {
  const [currentModel, setCurrentModel] = useState(
    "models/vaza/vaza1/vaZa.obj "
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
