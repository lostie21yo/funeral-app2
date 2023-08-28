import MODELS from "../../assets/models.json";
import { PrimaryButton } from './PrimaryButton';
import { ColorFilter } from './RadioButtons';
import "./Panel.css";
import { Accordion } from 'react-bootstrap';

const CustomAccordionItem = ({ model, index, activeKey, doSet, FILTERED_MODELS, onChangeModel, onAddModelToList }) => {

    const colors = [
        { name: 'black', value: '#000000' },
        { name: 'green', value: '#113b26' },
        { name: 'brown', value: '#291e00' },
        { name: 'silver', value: '#c0c0c0' }
    ];

    var colorSet = new Set()
    FILTERED_MODELS[model].forEach(elem => {
        colors.forEach(color => {
            // console.log(elem.name, color)
            if ((elem.name.includes(`(${color.name})`))) {
                colorSet.add(color)
            }
        });
    })
    colorSet = Array.from(colorSet)

    return (
        <Accordion.Item key={index} eventKey={index} onClick={() => {
            activeKey === null ? doSet(index) : doSet(null)
        }}>
            <PrimaryButton name={model} eventKey={index}>
                {model}
            </PrimaryButton>
            <Accordion.Body key={index} style={{ padding: "10px 10px" }}>
                <ColorFilter
                    name={model} colorSet={colorSet}
                    key={index + FILTERED_MODELS[model]}
                    classIndex={index}
                    files={FILTERED_MODELS[model]}
                    onChangeModel={onChangeModel}
                    onAddModelToList={onAddModelToList} />
            </Accordion.Body>
        </Accordion.Item>
    )
}

export const CustomAccordion = ({ onChangeModel, activeKey, doSet, onAddModelToList, material, size, type }) => {

    const FILTERED_MODELS = {}
    console.log('settings: ', material, size, type)
    Object.keys(MODELS).forEach(model => {
        FILTERED_MODELS[model] = [];
        MODELS[model].forEach(elem => {
            if (((elem.name.includes('[u_') || elem.name.includes(`[${material}_`))
                && (elem.name.includes('_u_') || elem.name.includes(`_${size}_`))
                && (elem.name.includes('_u]') || elem.name.includes(`_${type}]`)))
                || (!elem.name.includes('['))) {
                FILTERED_MODELS[model].push(elem);
            }
        });
    })

    return (
        <Accordion defaultActiveKey={activeKey} style={{ padding: "0px 6px 6px 6px" }}>
            {Object.keys(FILTERED_MODELS).map((model, index) => (
                <CustomAccordionItem
                    key={index}
                    model={model} index={index}
                    onChangeModel={onChangeModel}
                    onAddModelToList={onAddModelToList}
                    FILTERED_MODELS={FILTERED_MODELS}
                    doSet={doSet} activeKey={activeKey} />
            ))}
        </Accordion>
    );
}
