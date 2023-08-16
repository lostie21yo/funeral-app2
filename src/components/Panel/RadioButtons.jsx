import { useState } from 'react';
import { ToggleButton, Badge, ToggleButtonGroup } from "react-bootstrap";
import "./Panel.css";


export const RadioButtons = ({ files, name, onChangeModel, classIndex, onAddModelToList }) => {
    const emptyModel = `public/models/${name}/unselected.glb`

    const [radioValue, setRadioValue] = useState(emptyModel);


    return (

        <ToggleButtonGroup vertical={true} className='radio-btn-group' name={`${classIndex}-toggle`} type='radio' defaultValue={emptyModel}>
            <ToggleButton
                style={{ width: "100%" }} 
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

            {files.map((file, index) => (
                <ToggleButton
                    style={{ width: "100%", display: "flex", justifyContent: "space-between" }}
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
                    {file.name.split('[')[0]}
                    <Badge pill bg="info">Price</Badge>

                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    );
}

