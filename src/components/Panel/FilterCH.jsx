import { useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import "./Panel.css";
import { RadioButtons } from './RadioButtons';


const HeightRadioButtons = ({ list, setting, doSet, def, index }) => {

    if (list.length < 2) return null

    return (
        <div className="CH-btn-group">
            <span>Высота</span>
            <ToggleButtonGroup name={`${index}-height-toggle`}
                type='radio' defaultValue={def}>
                {list.map((height, idx) => (
                    <ToggleButton
                        className='height-toggle-button'
                        style={{
                            padding: '3px',
                            '--bs-btn-border-width': "1px",
                            fontSize: "0.9rem",
                            
                        }}
                        key={`${index}-${idx}`}
                        id={`${index}-${idx}`}
                        type="radio"
                        variant='outline-primary'
                        name={`${height}`}
                        value={height.value}
                        checked={setting === height.value}
                        onChange={(e) => {
                            doSet(e.currentTarget.value)

                        }}>
                        {height.value}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </div>
    )
}

const ColorRadioButtons = ({ list, setting, doSet, def, index }) => {

    if (list.length < 2) return null

    return (
        <div className="CH-btn-group">
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

                        }}>
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </div>
    )
}


export const FilterCH = ({ files, name, onChangeModel, classIndex, onAddModelToList, colorSet, heightSet }) => {
    
    var defColor;
    colorSet.length > 0 ? defColor = colorSet[0]['name'] : defColor = 'black'
    var defHeight;
    heightSet.length > 0 ? defHeight = heightSet[0].value : defHeight = 100
    const [color, setColor] = useState(defColor)
    const [height, setHeight] = useState(defHeight)
    
    var filtered_files = new Set()
    files.forEach(model => {
        if ((model.name.includes(`${color})`)) || (!model.name.includes('('))) {
            filtered_files.add(model);
        }
        if ((model.name.includes(`(${height}`)) || (!model.name.includes('('))) {
            filtered_files.add(model);
            // setHeight(height)
        }
    })
    filtered_files = Array.from(filtered_files)



    return (
        <>
            <HeightRadioButtons
                key={'height' + classIndex} def={height}
                index={classIndex} list={heightSet}
                setting={color} doSet={setHeight}
                onChangeModel={onChangeModel}
                onAddModelToList={onAddModelToList} />

            <ColorRadioButtons
                key={'color' + classIndex} def={color}
                index={classIndex} list={colorSet}
                setting={color} doSet={setColor}
                onChangeModel={onChangeModel}
                onAddModelToList={onAddModelToList} />

            <RadioButtons
                name={name}
                key={classIndex + name}
                classIndex={classIndex}
                files={filtered_files}
                onChangeModel={onChangeModel}
                onAddModelToList={onAddModelToList} />
        </>
    )
}