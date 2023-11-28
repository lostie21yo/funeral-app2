import { useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import "./Panel.css";
import PRICES from "../../assets/prices.json";

export const RadioButtons = ({ files, name, onChangeModel, classIndex, onAddModelToList }) => {

    var replacement = ''
    if (['01_Брусчатка'].includes(name)) {
        replacement = `Не выбрано.glb`
    }

    files.forEach((file) => {
        if (file.name.includes('Не выбрано')) {
            delete files[files.indexOf(file)]
        }
    })

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
                        // console.log(path)
                    }
                }
                }
            >
                Не выбрано
            </ToggleButton>

            {files.map((file, index) => (
                <ToggleButton
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: 'center' }}
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
                    {/* {file.name.split('[')[0].replace('.glb', '')} */}
                    <div>{file.name}</div>
                    {/* <div>{Object.keys(PRICES).includes(file.name) ? PRICES[file.name] : 'N/A'}</div> */}
                    <div className='price-badge'>
                        {Object.keys(PRICES).includes(file.name) ? PRICES[file.name] : 'N/A'}
                        {Object.keys(PRICES).includes(file.name) ? <img src="price-logo3.png" alt="" width="20px" style={{ margin: "0 0 0 2px" }}></img> : null}
                    </div>
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    );
}





