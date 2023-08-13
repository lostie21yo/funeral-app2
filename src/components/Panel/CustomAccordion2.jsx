import MODELS from "../../assets/models.json";
import { PrimaryButton } from './PrimaryButton';
import { RadioButtons } from './RadioButtons';
import "./Panel.css";
import { Accordion } from 'react-bootstrap';



export const CustomAccordion2 = ({ onChangeModel, onAddModelToList }) => {

    return (
        <Accordion defaultActiveKey={null} flush>
            {Object.keys(MODELS).map((model, index) => (
                <Accordion.Item eventKey={index} key={index}>
                    <PrimaryButton name={model} eventKey={index}>
                            {model}
                        </PrimaryButton>
                    <Accordion.Body key={index} style={{padding: "12px 16px "}}>
                        <RadioButtons
                            key={index + MODELS[model]}
                            classIndex={index}
                            files={MODELS[model]}
                            onChangeModel={onChangeModel}
                            onAddModelToList={onAddModelToList} />
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    );
}

// https://react-bootstrap.netlify.app/docs/components/buttons/
// https://react-bootstrap.netlify.app/docs/components/accordion