import { FC } from 'react';
import s from './ExportBlock.module.scss';
import Link from "next/link";

const ExportBlock: FC = () => {
    return (
            <div className={s.container}>
                <h1>
                    Промисловий комплекс України має потужну матеріально-технічну базу.
                    Україна виробляє та експортує за кордон дуже велику кількість різної
                    продукції. Український експорт у вересні склав $4,14 млрд, що є найкращим
                    показником з початку повномасштабного російського вторгнення
                </h1>
                <div className={s.partnersBlock}>
                    <div className={s.partners}>
                        <h1>Топ найбільших крайн та союзів єкспорту ресурсів з України</h1>
                        <ul>
                            <li>Європейський союз</li>
                            <li>Китай</li>
                            <li>Туреччина</li>
                            <li>Індія</li>
                            <li>США</li>
                            <li>Та багато інших країн</li>
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
                <Link href="src/components/MainPage/ExportBlock#">Залишити заявку на виробництво</Link>
            </div>
    );
};

export default ExportBlock;