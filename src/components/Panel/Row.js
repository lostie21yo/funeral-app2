import React, { useState } from "react";
import "./Panel.css";

export const Row = ({ name, files, onChangeModel }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="menu-btn-div">
      <button
        className="parent-button"
        onClick={
          () => setIsOpen((isOpen) => !isOpen)
        }
      >
        {name}
      </button>

      {isOpen &&
        files.map((file, index) => (
          <button
            className="children-button"
            key={index}
            onClick={() => {
              if (typeof file.name !== 'undefined') {
                onChangeModel(file.path.split("public/")[1] + "/" + file.name);
                console.log(file.path.split("public/")[1] + "/" + file.name)
              }
            }
            }
          >
            {file.path.split("/").at(-1)}
          </button>
        ))}
    </div>
  );
};
