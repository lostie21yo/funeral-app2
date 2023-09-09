import { useState } from 'react';
import { ToggleButton, Badge, ToggleButtonGroup } from "react-bootstrap";
import "./Panel.css";

export const RadioButtons = ({ files, name, onChangeModel, classIndex, onAddModelToList }) => {

    var replacement = ''
    if (['1_Облицовка'].includes(name)) {
        replacement = `Не выбрано.glb`

    }

    files.forEach((file) => {
        if (file.name.includes('Не выбрано')) {
            delete files[files.indexOf(file)]
        }
    })
    // console.log(files)

    const [radioValue, setRadioValue] = useState(replacement);
    const path = `models/${name}/` + replacement

    return (
        <ToggleButtonGroup
            className='radio-btn-group' name={`${classIndex}-toggle`}
            vertical={true} defaultValue={replacement} type='radio'>
            <ToggleButton
                style={{ width: "100%" }}
                key={name + classIndex}
                id={name + classIndex}
                variant='outline-secondary'
                value={replacement}
                checked={radioValue === replacement}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
                onClick={() => {
                    if (typeof replacement !== 'undefined') {
                        onChangeModel(path);
                        onAddModelToList(classIndex, path);
                        console.log(path)
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
                            // console.log(file.path.split("public/")[1] + "/" + file.name)
                        }
                    }
                    }
                >
                    {/* {file.name.split('[')[0].replace('.glb', '')} */}
                    {file.name}

                    <Badge pill bg="info" className='badge'>Price</Badge>

                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    );
}





