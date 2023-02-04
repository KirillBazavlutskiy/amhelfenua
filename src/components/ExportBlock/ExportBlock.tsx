import { FC } from 'react';
import s from './ExportBlock.module.scss';

const ExportBlock: FC = () => {
    return (
        <div className={s.container}>
            <div className={s.partners}>
                <h1>Топ найбільших крайн та союзів єкспорту ресурсів з України</h1>
                <ul>
                    <li>Європейський союз</li>
                    <li>Китай</li>
                    <li>Туреччина</li>
                    <li>Індія</li>
                    <li>США</li>
                    <li>Та багато інший країн</li>
                </ul>
            </div>
            <div className={s.partners}>
                <h1>Товари, які єкспортують з України</h1>
                <ul>
                    <li>Продукція АПК та харчової промисловості</li>
                    <li>Продукція металургійного комплексу</li>
                    <li>Мінеральні продукти</li>
                    <li>Хімічні продукти</li>
                    <li>Деревина та паперова маса</li>
                    <li>Інші продукти</li>
                </ul>
            </div>
            <div className={s.partners}>
                <h1>Країни, до яких найбільше зріс єкспорт товарів з України</h1>
                <ul>
                    <li>Китай</li>
                    <li>Республіка Корея</li>
                    <li>ЄМЕН</li>
                    <li>Домініканська Республіка</li>
                    <li>Катар</li>
                    <li>Інші</li>
                </ul>
            </div>
        </div>
    );
};

export default ExportBlock;