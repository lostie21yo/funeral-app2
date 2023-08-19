import { useState } from 'react';
import { Container, ToggleButtonGroup } from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { CustomAccordion } from './CustomAccordion';

const FilterRadioButtons = ({ list, setting, doSet, variant, def }) => {
    return (
        <ToggleButtonGroup vertical={true} name={`${setting}-toggle`}
            type='radio' defaultValue={def} >
            {list.map((radio, idx) => (
                <ToggleButton
                    style={{ padding: "3px 6px " }}
                    key={`${variant}-${idx}`}
                    id={`${variant}-${idx}`}
                    type="radio"
                    variant={variant}
                    name={`radio+${idx}`}
                    value={radio.value}
                    checked={setting === radio.value}
                    onChange={(e) => { doSet(e.currentTarget.value); console.log(radio, idx) }}
                >
                    {radio.name}
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    )
}

function Filter({ onChangeModel, onAddModelToList }) {
    const [material, setMaterial] = useState('granite');
    const [size, setSize] = useState('100');
    const [type, setType] = useState('standard');

    const materials = [
        { name: 'Гранит', value: 'granite' },
        { name: 'Мрамор', value: 'marble' },
    ];
    const sizes = [
        { name: '70 см', value: '70' },
        { name: '80 см', value: '80' },
        { name: '90 см', value: '90' },
        { name: '100 см', value: '100' },
        { name: '120 см', value: '120' },
        { name: 'Семейный', value: 'family' },
    ];
    const types = [
        { name: 'Стандарт', value: 'standard' },
        { name: 'Православные', value: 'orthodox' },
        { name: 'Мусульманские', value: 'muslim' },
    ];

    return (
        <div className="scrollbar scrollbar-primary" >

            <Container className='filter' style={{ padding: '0px 0px 8px 0px' }}>
                <Container className='filter-button-group' style={{ padding: '0px 4px 0px 6px' }}>
                    <Container style={{ padding: '0' }} className='filter-button-group'>
                        <p style={{ margin: '0px 0px 4px 5px' }}>Материал</p>
                        <FilterRadioButtons key={materials} list={materials}
                            setting={material} doSet={setMaterial}
                            variant={'outline-danger'} def={material} />
                    </Container>
                    <Container style={{ padding: '0' }} className='filter-button-group'>
                        <p style={{ margin: '0px 0px 4px 5px' }}>Тип</p>
                        <FilterRadioButtons key={types} list={types}
                            setting={type} doSet={setType}
                            variant={'outline-warning'} def={type} />
                    </Container>
                </Container>
                <Container className='filter-button-group' style={{ padding: '0px 6px 0px 4px' }}>
                    <p style={{ margin: '0px 0px 4px 5px' }}>Размер</p>
                    <FilterRadioButtons key={sizes} list={sizes}
                        setting={size} doSet={setSize}
                        variant={'outline-primary'} def={size} />
                </Container>
            </Container>
            <CustomAccordion
                material={material}
                key={material + size + type}
                size={size}
                type={type}
                onChangeModel={onChangeModel}
                onAddModelToList={onAddModelToList} />
        </div>
    );
}

export default Filter;