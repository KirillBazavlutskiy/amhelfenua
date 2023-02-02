import {FC} from 'react';
import s from './CitiesBlockText.module.scss';

const CitiesBlockText: FC = () => {
    return (
        <div className={s.container}>
            <h1>Ми українці, які змушені були покинути Батьківщину</h1>
            <p>24 лютого 2022 року Росія почала повномасштабне військове вторгнення на територію незалежної України</p>
        </div>
    );
};

export default CitiesBlockText;