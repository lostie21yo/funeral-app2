import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import MODELS from "../../assets/models.json";
import { PrimaryButton } from './PrimaryButton';
import { RadioButtons } from './RadioButtons';
import "./Panel.css";


export const CustomAccordion = ({ onChangeModel, onAddModelToList, onDeleteModelFromList }) => {

    return (
        <Accordion defaultActiveKey={null}>
            {Object.keys(MODELS).map((model, index) => (
                <Card key={index} style={{border: ""}}>

                    <Card.Title >
                        <PrimaryButton name={model} eventKey={index}>
                            {model}
                        </PrimaryButton>
                    </Card.Title>

                    <Accordion.Collapse eventKey={index}>
                        <Card.Body>
                            <RadioButtons
                                classIndex={index}
                                files={MODELS[model]}
                                onChangeModel={onChangeModel}
                                onAddModelToList={onAddModelToList} />
                        </Card.Body>
                    </Accordion.Collapse>

                </Card>

            ))}
        </Accordion>
    );
}

// https://react-bootstrap.netlify.app/docs/components/buttons/
// https://react-bootstrap.netlify.app/docs/components/accordion