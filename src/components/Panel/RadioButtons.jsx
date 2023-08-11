import { useState } from 'react';
import { ButtonGroup, ToggleButton, Badge, Container } from "react-bootstrap";
import "./Panel.css";

export const RadioButtons = ({ files, onChangeModel, classIndex, onAddModelToList }) => {
    const [radioValue, setRadioValue] = useState(0);

    return (
        <ButtonGroup vertical={true}>
            {files.map((file, index) => (
                <Container className=''>
                    <ToggleButton

                        // style={{ width: "60%" }}
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
                    <Badge bg="success" className='custom-badge'>Price</Badge>
                </Container>
            ))}

        </ButtonGroup>
    );
}

