import { useState } from 'react';
import { ToggleButton, Badge, ToggleButtonGroup } from "react-bootstrap";
import "./Panel.css";

const ColorRadioButtons = ({ list, setting, doSet, def, index, onChangeModel, onAddModelToList }) => {

    if (list.length === 0) return null

    return (
        <div className="color-btn-group">
            <span>Цвет</span>
            <ToggleButtonGroup name={`${index}-color-toggle`}
                type='radio' defaultValue={def}>
                {list.map((color, idx) => (
                    <ToggleButton
                        className='color-toggle-button'
                        style={{
                            '--bs-btn-border-width': "1px",
                            '--bs-btn-border-color': 'transparent',
                            '--bs-btn-bg': `${color.value}`,
                            '--bs-btn-active-bg': `${color.value}`,
                            '--bs-btn-active-border-color': 'green',
                        }}
                        key={`${index}-${idx}`}
                        id={`${index}-${idx}`}
                        type="radio"
                        variant='outline-secondary'
                        name={`${color}`}
                        value={color.name}
                        checked={setting === color.name}
                        onChange={(e) => {
                            doSet(e.currentTarget.value)
                            // onChangeModel('');
                            // onAddModelToList(0, '', true);
                        }}>
                        {/* {color.name[0]} */}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </div>
    )
}

export const ColorFilter = ({ files, name, onChangeModel, classIndex, onAddModelToList, colorSet }) => {

    const [color, setColor] = useState('black')

    var colored_files = []

    files.forEach(model => {
        // console.log(model.name)
        if ((model.name.includes(`(${color})`)) || (!model.name.includes('('))) {
            colored_files.push(model);
        }
    })

    return (
        <>
            <ColorRadioButtons
                key={classIndex} def={color}
                index={classIndex} list={colorSet}
                setting={color} doSet={setColor}
                onChangeModel={onChangeModel}
                onAddModelToList={onAddModelToList} />

            <RadioButtons
                name={name}
                key={classIndex + name}
                classIndex={classIndex}
                files={colored_files}
                onChangeModel={onChangeModel}
                onAddModelToList={onAddModelToList} />
        </>
    )
}

const RadioButtons = ({ files, name, onChangeModel, classIndex, onAddModelToList }) => {

    const [radioValue, setRadioValue] = useState('');

    return (
        <ToggleButtonGroup vertical={true} className='radio-btn-group' name={`${classIndex}-toggle`} type='radio' defaultValue={''}>
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

