import React, { useState } from "react";
import "./Panel.css";
import { Button, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Row = ({ name, files, onChangeModel, classIndex, onAddModelToList }) => {
  const [isOpen, setIsOpen] = useState(false);

  // const pngsrc = `/Models/placeholder.png`
  const pngsrc = `/Models/${name.toString()}/${name.toString()}.png`

  return (
    <div className="menu-btn-div" >

      <div className="btn-image-container" onClick={() => { setIsOpen((isOpen) => !isOpen) }}>
        <img className="btn-image" alt='' src={pngsrc} />
        <span className="btn-image-text-position">{name}</span>
      </div>

      {isOpen &&
        files.map((file, index) => (
          <div key={index} >
            <Button
              // className="children-button"
              variant="secondary" size="sm" className="children-button"
              key={index}
              onClick={() => {
                if (typeof file.name !== 'undefined') {
                  onChangeModel(file.path.split("public/")[1] + "/" + file.name);
                  onAddModelToList(classIndex, file.path.split("public/")[1] + "/" + file.name);
                }
              }
              }
            >
              {file.path.split("/").at(-1)}
            </Button>
            <Badge bg="success">Price</Badge>
            {/* <span
              key={file}
              style={{color: "white"}}
            >
              Price
            </span> */}
          </div>
        ))}
    </div>
  );
};
