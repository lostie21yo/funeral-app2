import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import MODELS from "../../assets/models.json";
import { CustomToggle } from './CustomToggle';
import { RadioButtons } from './RadioButtons';


export const CustomAccordion = ({ onChangeModel, onAddModelToList, onDeleteModelFromList }) => {
    return (
        <Accordion defaultActiveKey={null}>
            {Object.keys(MODELS).map((model, index) => (
                <Card key={index}>
                    <Card.Header>
                        <CustomToggle name={model} eventKey={index}>
                            {model}
                        </CustomToggle>
                    </Card.Header>

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