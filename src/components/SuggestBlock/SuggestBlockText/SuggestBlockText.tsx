import {FC} from 'react';
import s from './SuggestBlockText.module.scss';
import Logo from '../../../assets/Logo/Logo-full.png'
import Image from "next/image";

const SuggestBlockText: FC = () => {
    return (
        <div className={s.container}>
            <div className={s.logo}>
                <Image src={Logo} alt="LOGO"/>
            </div>
            <p>
                Багато українців втратили свої домівки, тисячі мирних жителів були вбиті,
                росія намагається знищити українців як націю, а Україну як незалежну державу,
                і вони цього не приховують. Але українці це сильна нація
                і ми відстоїмо наше право бути незалежними і вільними.
            </p>
            <p>Ми допомагаємо Україні і Українцям у всіх скрутних ситуаціях та напрямках розвитку</p>
            <button>Хочу допомогти</button>
        </div>
    );
};

export default SuggestBlockText;