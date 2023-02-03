import { FC, useState } from 'react';

import s from './Header.module.scss';
import logo from '../../assets/Logo/Logo-heart.ico';
import {motion, useScroll} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Header: FC = () => {
	const [headerMenu, setHeaderMenu] = useState<boolean>(false);

	const { scrollY } = useScroll()
	const [backgroundTransparent, setBackgroundTransparent] = useState<boolean>(true);

	scrollY.onChange((val) => {
		if (val > 20) {
			setBackgroundTransparent(false);
		} else {
			setBackgroundTransparent(true);
		}
	})

	return (
		<motion.header
			style={{ backgroundColor: backgroundTransparent ? 'transparent' : 'white',
					color: backgroundTransparent ? 'white' : 'black'}}
			initial={{ backgroundColor: 'transparent', color: 'white' }}
			animate={{ backgroundColor: backgroundTransparent ? 'transparent' : 'white',
					color: backgroundTransparent ? 'white' : 'black' }}
			className={`${s.container} ${!backgroundTransparent && 'shadow-md'}`}
		>
			<div className={s.logo}>
				<Image src={logo} alt='LOGO' />
				<p>AMHELFENUA</p>
			</div>
			<div className={s.navbar}>
				<div className={s.navigation}>
					<Link href='/'>Головна</Link>
					<Link href='/contacts'>Контакти</Link>
				</div>
				<div className={s.language}>
					<p>Мова</p>
				</div>
				<button>Хочу допомогти</button>
			</div>
		</motion.header>
	);
};

export default Header;
