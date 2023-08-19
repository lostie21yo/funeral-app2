import MODELS from "../../assets/models.json";
import { PrimaryButton } from './PrimaryButton';
import { RadioButtons } from './RadioButtons';
import "./Panel.css";
import { Accordion } from 'react-bootstrap';


export const CustomAccordion = ({ onChangeModel, onAddModelToList, material, size, type }) => {

    const FILTERED_MODELS = {}
    // console.log('settings:', material, size, type)
    Object.keys(MODELS).forEach(model => {
        FILTERED_MODELS[model] = [];
        MODELS[model].forEach(elem => {
            // const materialRegExp = new RegExp(`${'\[|mu\]'}`);
            // const sizeRegExp = new RegExp(`${'universal'}`);
            // const typeRegExp = new RegExp(`${'universal'}`);
            // const check = elem.name.match(materialRegExp)
            // console.log(`${regexp} is in ${elem.name}`)
            // if (check !== null){
            //     console.log(`${materialRegExp} is in ${elem.name}: ${check}`)
            // }
            const pattern = `[${material}_${size}_${type}]`
            if (elem.name.includes('[universal]')) {
                // console.log('[universal]', elem.name)
                FILTERED_MODELS[model].push(elem);
            }
            if (elem.name.includes(pattern)) {
                // console.log(pattern, elem.name)
                FILTERED_MODELS[model].push(elem);
            }
        });
    })
    // console.log(MODELS)

    // console.log(FILTERED_MODELS)



    return (

        <Accordion defaultActiveKey={null} style={{padding: "0px 6px 6px 6px"}}>
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
