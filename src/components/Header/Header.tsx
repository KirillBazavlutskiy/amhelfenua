import {FC, useRef, useState} from 'react';

import { CSSTransition } from 'react-transition-group';
import {motion, useScroll} from "framer-motion";

import s from './Header.module.scss';
import logo from '../../assets/Logo/Logo-heart.ico';

import Image from "next/image";
import Link from "next/link";

const Header: FC = () => {
	const [headerMenu, setHeaderMenu] = useState<boolean>(false);
	const slice = useRef(null);

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
			<CSSTransition
				in={headerMenu}
				timeout={5000}
				classNames={s.slice}
				nodeRef={slice}
			>
				<div className={s.burger} onClick={() => setHeaderMenu(prev => !prev)}>
					<div ref={slice} className={`${s.slice} + ${s.slice1} + ${backgroundTransparent ? "bg-[#fff]" : "bg-[#000]"}`} />
					<div ref={slice} className={`${s.slice} + ${s.slice2} + ${backgroundTransparent ? "bg-[#fff]" : "bg-[#000]"}`} />
					<div ref={slice} className={`${s.slice} + ${s.slice3} + ${backgroundTransparent ? "bg-[#fff]" : "bg-[#000]"}`} />
				</div>
			</CSSTransition>
		</motion.header>
	);
};

export default Header;
