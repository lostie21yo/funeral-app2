import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import "./Panel.css";

export const PrimaryButton = ({ name, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        null
    );

    return (
        // <div onClick={decoratedOnClick} className='gradient btn-image-container'>
        //     <div>
        //         <img src={`/Models/${name.toString()}/${name.toString()}.jpg`}
        //             alt="button" className='btn-image'></img>
        //         <div className="btn-image-text-position">{name}</div>
        //     </div>
        // </div>

        <div onClick={decoratedOnClick} className='btn-image-container'>
            <div className="gradient">
                <img src={`/Models/${name.toString()}/${name.toString()}.jpg`} alt="" className="btn-image"/>
            </div>
            <div className="btn-image-text-position">{name}</div>
        </div>

    );
}