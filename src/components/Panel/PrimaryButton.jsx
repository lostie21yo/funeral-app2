import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { Button } from 'react-bootstrap';
import "./Panel.css";

export const PrimaryButton = ({ name, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <div onClick={decoratedOnClick} className='btn-image-container'>

            <img src="\models\Вазы\Вазы.png" alt="Кнопка «button»" className='btn-image'></img>
            <span className="btn-image-text-position">{name}</span>
        </div>
    );
}