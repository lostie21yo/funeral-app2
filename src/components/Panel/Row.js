import React, { useState } from "react";
import "./Panel.css";

export const Row = ({ name, files, onChangeModel }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="menu-btn-div">
      <button
        style={{ marginTop: 20 }}
        className="main-button"
        onClick={
          () => setIsOpen((isOpen) => !isOpen)
        }
      >
        {name}
      </button>

      {isOpen &&
        files.map((file, index) => (
          <button
          style={{ marginTop: 5, marginLeft: 10,  width: "80%" }}
            key={index}
            onClick={() =>
              onChangeModel(file.path.split("public/")[1] + "/" + file.name)
            }
          >
            {file.path.split("/").at(-1)}
          </button>
        ))}
    </div>
  );
};
