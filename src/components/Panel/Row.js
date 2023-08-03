import React, { useState } from "react";
import "./styles.css";

export const Row = ({ name, files, onChangeModel }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        style={{ marginTop: 50 }}
        className="main-button"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        {name}
      </button>
      {isOpen &&
        files.map((file, index) => (
          <button
            key={index}
            onClick={() =>
              onChangeModel(file.path.split("public/")[1] + "/" + file.name)
            }
          >
            {file.path}
          </button>
        ))}
    </>
  );
};
