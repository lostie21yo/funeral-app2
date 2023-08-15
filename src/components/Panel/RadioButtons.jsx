import { useState } from 'react';
import { ButtonGroup, ToggleButton, Badge, Container, ToggleButtonGroup, ButtonToolbar } from "react-bootstrap";
import "./Panel.css";


export const RadioButtons = ({ files, name, onChangeModel, classIndex, onAddModelToList }) => {
    const emptyModel = `public/models/${name}/unselected.glb`

    const [radioValue, setRadioValue] = useState(emptyModel);


    return (

        <ToggleButtonGroup vertical={true} className='radio-btn-group' name={`${classIndex}-toggle`} type='radio' defaultValue={emptyModel}>
            {/* <Container key={emptyModel} className='toggle-btn-container'> */}
            <ToggleButton
                style={{ width: "70%" }}
                className="mb-1"
                key={emptyModel + classIndex}
                id={`radio-${emptyModel}`}
                variant='outline-secondary'
                value={emptyModel}
                checked={radioValue === emptyModel}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
                onClick={() => {
                    if (typeof emptyModel !== 'undefined') {
                        onChangeModel(emptyModel);
                        onAddModelToList(classIndex, emptyModel);
                    }
                }
                }
            >
                Не выбрано
            </ToggleButton>
            {/* </Container> */}

            {files.map((file, index) => (
                // <Container key={index} className='toggle-btn-container'>
                <ToggleButton
                    style={{ width: "70%", display: "flex", justifyContent: "space-between" }}
                    className="mb-1"
                    key={index}
                    id={`radio-${index}`}
                    variant='outline-success'
                    value={file.name}
                    checked={radioValue === file.name}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                    onClick={() => {
                        if (typeof file.name !== 'undefined') {
                            onChangeModel(file.path.split("public/")[1] + "/" + file.name);
                            onAddModelToList(classIndex, file.path.split("public/")[1] + "/" + file.name);
                        }
                    }
                    }
                >
                    {file.path.split("/").at(-1)}
                    <Badge pill bg="info" className=''>Price</Badge>

                </ToggleButton>
                // </Container> 
            ))}
        </ToggleButtonGroup>
    );
}

