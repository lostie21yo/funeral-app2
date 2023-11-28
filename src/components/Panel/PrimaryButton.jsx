import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import "./Panel.css";

export const PrimaryButton = ({ name, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        null
    );
    return (

        <div onClick={decoratedOnClick} className='btn-image-container'>
            <div className="gradient">
                <img src={`./models/${name.toString()}/image.jpg`} alt="" className="btn-image"/>
            </div>
            <div className="btn-image-text-position">{name.split('_')[1]}</div>
        </div>

    );
}