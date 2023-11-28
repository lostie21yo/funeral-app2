import { useState } from 'react';
import { Container, ToggleButtonGroup } from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { CustomAccordion } from './CustomAccordion';

const FilterRadioButtons = ({ list, setting, doSet, variant, def, onChangeModel, onAddModelToList, onChangeFIOcount }) => {
    return (
        <ToggleButtonGroup vertical={true} name={`size-${setting}-toggle`}
            type='radio' defaultValue={def} style={{ height: '100%', display: 'flex' }}>
            {list.map((radio, idx) => (
                <ToggleButton
                    style={{ padding: "3px 6px", display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    key={`${variant}-${idx}`}
                    id={`${variant}-${idx}`}
                    type="radio"
                    // {...console.log(radio)}
                    variant={variant}
                    name={`${radio}`}
                    value={radio.value}
                    checked={setting === radio.value}
                    onChange={(e) => {
                        doSet(e.currentTarget.value)
                        onChangeModel('');
                        if (setting === '1' || setting === '2') {
                            onChangeFIOcount(e.currentTarget.value)
                        }
                        // onAddModelToList(0, '', true); # сброс при смене параметров фильтра
                    }}
                >
                    {radio.name}
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    )
}

export default function FilterMST({ onChangeModel, onAddModelToList, onChangeFIOcount }) {
    const [material, setMaterial] = useState('granite');
    const [size, setSize] = useState('1');
    const [type, setType] = useState('standard');
    const [activeKey, setActiveKey] = useState(null)

    const materials = [
        { name: 'Гранит', value: 'granite' },
        { name: 'Мрамор', value: 'marble' },
    ];
    const sizes = [
        { name: 'Одиночные', value: '1' },
        { name: 'Семейные', value: '2' },
    ];
    const types = [
        { name: 'Стандарт', value: 'standard' },
        { name: 'Православные', value: 'orthodox' },
        { name: 'Мусульманские', value: 'muslim' },
    ];

    return (
        <div className="scrollbar scrollbar-primary" >

            <Container className='filter' style={{ padding: '4px 6px 10px' }}>
                <Container className='filter-button-group' style={{ padding: '0px 3px 0px 0px' }}>
                    <Container style={{ padding: '0' }} className='filter-button-group'>
                        <p style={{ margin: '0px 0px 4px 5px' }}>Материал</p>
                        <FilterRadioButtons key={materials} list={materials}
                            setting={material} doSet={setMaterial}
                            variant={'outline-danger'} def={material}
                            onChangeModel={onChangeModel}
                            onAddModelToList={onAddModelToList}
                        />
                    </Container>
                    <Container className='filter-button-group' style={{ padding: '0px 0px 0px 0px' }}>
                        <p style={{ margin: '0px 0px 4px 5px' }}>Размер</p>
                        <FilterRadioButtons key={sizes} list={sizes}
                            setting={size} doSet={setSize}
                            variant={'outline-info'} def={size}
                            onChangeModel={onChangeModel}
                            onAddModelToList={onAddModelToList}
                            onChangeFIOcount={onChangeFIOcount} />
                    </Container>
                </Container>
                <Container className='filter-button-group' style={{ padding: '0px 0px 0px 3px' }}>
                    <p style={{ margin: '0px 0px 4px 5px' }}>Тип</p>
                    <FilterRadioButtons key={types} list={types}
                        setting={type} doSet={setType}
                        variant={'outline-warning'} def={type}
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