import React, { useState } from "react";
import "./Panel.css";
import { Button } from 'react-bootstrap';

export const Row = ({ name, files, onChangeModel, classIndex, onAddModelToList }) => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="menu-btn-div">
      <button
        className="parent-button"
        onClick={() => { setIsOpen((isOpen) => !isOpen) }
        }
      >
        {name}
      </button>

      {isOpen &&
        files.map((file, index) => (
          <div>
            <button
              className="children-button"
              key={file.id}
              onClick={() => {
                if (typeof file.name !== 'undefined') {
                  onChangeModel(file.path.split("public/")[1] + "/" + file.name);
                  console.log(file.path.split("public/")[1] + "/" + file.name)
                  onAddModelToList(classIndex, file.path.split("public/")[1] + "/" + file.name)
                }
              }
              }
            >
              {file.path.split("/").at(-1)}
            </button>
            <span
              key={file}
              style={{color: "white"}}
            >
              Price
            </span>
          </div>
        ))}
    </div>
  );
};
