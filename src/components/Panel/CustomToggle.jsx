import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { Button } from 'react-bootstrap';


export const CustomToggle = ({ name, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <Button
            variant='primary'
            onClick={decoratedOnClick}
        >
            {name}
        </Button>
    );
}