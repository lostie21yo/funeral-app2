import { useState } from 'react';
import { Container, ToggleButtonGroup } from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { CustomAccordion } from './CustomAccordion';

// function ClearCanvas({ onChangeModel, onAddModelToList }) {
//     if (typeof file.name !== 'undefined') {
//         onChangeModel(file.path.split("public/")[1] + "/" + file.name);
//         onAddModelToList(classIndex, file.path.split("public/")[1] + "/" + file.name);
//     }
// }

const FilterRadioButtons = ({ list, setting, doSet, variant, def, onChangeModel, onAddModelToList }) => {
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
                    name={`${radio}`}
                    value={radio.value}
                    checked={setting === radio.value}
                    onChange={(e) => {
                        doSet(e.currentTarget.value)
                        onChangeModel('');
                        onAddModelToList(0, '', true);
                    }}
                >
                    {radio.name}
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    )
}

export default function Filter({ onChangeModel, onAddModelToList }) {
    const [material, setMaterial] = useState('granite');
    const [size, setSize] = useState('100');
    const [type, setType] = useState('u');
    const [activeKey, setActiveKey] = useState(null)

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
        { name: 'Стандарт', value: 'u' },
        { name: 'Православные', value: 'orthodox' },
        { name: 'Мусульманские', value: 'muslim' },
    ];

    return (
        <div className="scrollbar scrollbar-primary" >

            <Container className='filter' style={{ padding: '0px 0px 8px 0px' }}>
                <Container className='filter-button-group' style={{ padding: '0px 6px 8px 6px' }}>
                    <Container style={{ padding: '0' }} className='filter-button-group'>
                        <p style={{ margin: '0px 0px 4px 5px' }}>Материал</p>
                        <FilterRadioButtons key={materials} list={materials}
                            setting={material} doSet={setMaterial}
                            variant={'outline-danger'} def={material}
                            onChangeModel={onChangeModel}
                            onAddModelToList={onAddModelToList}
                        />
                    </Container>
                    <Container style={{ padding: '0' }} className='filter-button-group'>
                        <p style={{ margin: '0px 0px 4px 5px' }}>Тип</p>
                        <FilterRadioButtons key={types} list={types}
                            setting={type} doSet={setType}
                            variant={'outline-warning'} def={type}
                            onChangeModel={onChangeModel}
                            onAddModelToList={onAddModelToList} />
                    </Container>
                </Container>
                <Container className='filter-button-group' style={{ padding: '0px 6px 0px 4px' }}>
                    <p style={{ margin: '0px 0px 4px 5px' }}>Ширина</p>
                    <FilterRadioButtons key={sizes} list={sizes}
                        setting={size} doSet={setSize}
                        variant={'outline-primary'} def={size}
                        onChangeModel={onChangeModel}
                        onAddModelToList={onAddModelToList} />
                </Container>
            </Container>
            <CustomAccordion
                activeKey={activeKey}
                doSet={setActiveKey}
                material={material}
                key={material + size + type}
                size={size} type={type}
                onChangeModel={onChangeModel}
                onAddModelToList={onAddModelToList} />
        </div>
    );
}