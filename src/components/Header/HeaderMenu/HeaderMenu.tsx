import {FC} from 'react';
import s from './HeaderMenu.module.scss';
import Link from "next/link";

interface HeaderMenuProps {
    menuActive: boolean
}
const HeaderMenu: FC<HeaderMenuProps> = ({  menuActive }) => {
    return (
        <div className={`${s.container} ${menuActive ? s.active : s.notActive}`}>
            <Link href='/'>Головна</Link>
            <Link href='/contacts'>Контакти</Link>
            <button>Мова</button>
            <button>Хочу допомогти</button>
        </div>
    );
};

export default HeaderMenu;