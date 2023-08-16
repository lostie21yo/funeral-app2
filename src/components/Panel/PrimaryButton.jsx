import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import "./Panel.css";

export const PrimaryButton = ({ name, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        null
    );

    return (
        <div onClick={decoratedOnClick} className='btn-image-container'>

            <img src={`/Models/${name.toString()}/${name.toString()}.png`} alt="button" className='btn-image'></img>
            <span className="btn-image-text-position">{name}</span>
        </div>
    );
}