import { useState } from 'react';
import { ButtonToolbar, Container, ToggleButtonGroup } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const FilterRadioButtons = ({ list, setting, doSet, variant, def }) => {
    return (
        <ToggleButtonGroup name={`${setting}-toggle`} type='radio' defaultValue={def} className='filter-button-group'>
        {/* <Container key={variant}> */}
            {list.map((radio, idx) => (
                <ToggleButton
                    key={`${variant}-${idx}`}
                    id={`${variant}-${idx}`}
                    type="radio"
                    // size='sm'
                    variant={variant}
                    name={`radio+${idx}`}
                    value={radio.value}
                    checked={setting === radio.value}
                    onChange={(e) => { doSet(e.currentTarget.value); console.log(radio, idx) }}
                >
                    {radio.name}
                </ToggleButton>
            ))}
        {/* </Container> */}
        </ToggleButtonGroup>
    )
}

function Filter() {
    const [material, setMaterial] = useState('m1');
    const [size, setSize] = useState('s1');
    const [type, setType] = useState('t1');

    const materials = [
        { name: 'Гранит', value: 'm1' },
        { name: 'Мрамор', value: 'm2' },
    ];
    const sizes = [
        { name: '70', value: 's1' },
        { name: '80', value: 's2' },
        { name: '90', value: 's3' },
        { name: '100', value: 's4' },
        { name: '120', value: 's5' },
        { name: 'Семейный', value: 's6' },
    ];
    const types = [
        { name: 'Стандарт', value: 't1' },
        { name: 'Православные', value: 't2' },
        { name: 'Мусульманские', value: 't3' },
    ];

    return (
            <Container className='filter'>
                <FilterRadioButtons key={materials} list={materials} setting={material} doSet={setMaterial} variant={'outline-danger'} def={'m1'}/>
                <FilterRadioButtons key={sizes} list={sizes} setting={size} doSet={setSize} variant={'outline-primary'} def={'s1'}/>
                <FilterRadioButtons key={types} list={types} setting={type} doSet={setType} variant={'outline-warning'} def={'t1'}/>
            </Container>
    );
}

export default Filter;