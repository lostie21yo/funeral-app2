import { useState } from 'react';
import { ButtonGroup, ToggleButton, Badge, Container } from "react-bootstrap";
import "./Panel.css";


export const RadioButtons = ({ files, name, onChangeModel, classIndex, onAddModelToList }) => {
    const [radioValue, setRadioValue] = useState(0);

    const emptyModel = `public/models/${name}/unselected.glb`

    return (
        <ButtonGroup vertical={true} className='radio-btn-group'>

            <Container key={emptyModel} className='toggle-btn-container'>
                <ToggleButton
                    style={{ width: "70%" }}
                    className="mb-1"
                    key={emptyModel + classIndex}
                    id={`radio-${emptyModel}`}
                    type="radio"
                    variant='outline-light'
                    name="radio"
                    value={emptyModel.name}
                    checked={radioValue === emptyModel.name}
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
            </Container>

            {files.map((file, index) => (
                <Container key={index} className='toggle-btn-container'>
                    <ToggleButton
                        style={{ width: "70%" }}
                        className="mb-1"
                        key={index}
                        id={`radio-${index}`}
                        type="radio"
                        variant='outline-success'
                        name="radio"
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
                    </ToggleButton>
                    <Badge pill bg="info" className='custom-badge'>Price</Badge>
                </Container>
            ))}

        </ButtonGroup>
    );
}

