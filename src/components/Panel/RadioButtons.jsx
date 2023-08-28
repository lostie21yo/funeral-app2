import { useState } from 'react';
import { ToggleButton, Badge, ToggleButtonGroup } from "react-bootstrap";
import "./Panel.css";

export const RadioButtons = ({ files, name, onChangeModel, classIndex, onAddModelToList }) => {

    const [radioValue, setRadioValue] = useState('');

    return (
        <ToggleButtonGroup
            className='radio-btn-group' name={`${classIndex}-toggle`}
            vertical={true} defaultValue={''} type='radio'>
            <ToggleButton
                style={{ width: "100%" }}
                key={name + classIndex}
                id={name + classIndex}
                variant='outline-secondary'
                value={''}
                checked={radioValue === ''}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
                onClick={() => {
                    if (typeof '' !== 'undefined') {
                        onChangeModel('');
                        onAddModelToList(classIndex, '');
                    }
                }
                }
            >
                Не выбрано
            </ToggleButton>

            {files.map((file, index) => (
                <ToggleButton
                    style={{ width: "100%", display: "flex", justifyContent: "space-between" }}
                    key={index}
                    id={`${file.name + index}`}
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
                    {file.name.split('[')[0].replace('.glb', '')}
                    <Badge pill bg="info" className='badge'>Price</Badge>

                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    );
}





