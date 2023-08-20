import MODELS from "../../assets/models.json";
import { PrimaryButton } from './PrimaryButton';
import { RadioButtons } from './RadioButtons';
import "./Panel.css";
import { Accordion } from 'react-bootstrap';


export const CustomAccordion = ({ onChangeModel, onAddModelToList, material, size, type }) => {

    const FILTERED_MODELS = {}
    console.log('settings: ', material, size, type)
    Object.keys(MODELS).forEach(model => {
        FILTERED_MODELS[model] = [];
        MODELS[model].forEach(elem => {
            if ((elem.name.includes('[u_') || elem.name.includes(`[${material}_`))
                && (elem.name.includes('_u_') || elem.name.includes(`_${size}_`))
                && (elem.name.includes('_u]') || elem.name.includes(`_${type}]`))) {
                FILTERED_MODELS[model].push(elem);
            }
        });
    })

    return (

        <Accordion defaultActiveKey={null} style={{ padding: "0px 6px 6px 6px" }}>
            {Object.keys(FILTERED_MODELS).map((model, index) => (
                <Accordion.Item eventKey={index} key={index}>
                    <PrimaryButton name={model} eventKey={index}>
                        {model}
                    </PrimaryButton>
                    <Accordion.Body key={index} style={{ padding: "12px 16px " }}>
                        <RadioButtons
                            name={model}
                            key={index + FILTERED_MODELS[model]}
                            classIndex={index}
                            files={FILTERED_MODELS[model]}
                            onChangeModel={onChangeModel}
                            onAddModelToList={onAddModelToList} />
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    );
}
