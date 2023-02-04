import { FC } from 'react';
import Image from "next/image";
import Link from "next/link";

import s from './Footer.module.scss';

import Logo from '../../assets/Logo/Logo-full.png';

import Inst from '../../assets/Links/Instagram.svg';
import FB from '../../assets/Links/Facebook.svg';
import WU from '../../assets/Links/Whatsapp.svg';
import TG from '../../assets/Links/Telegram.svg'

const Footer: FC = () => {
    return (
        <div className={s.container}>
            <div className={s.inner}>
                <div className={s.links}>
                    <div className={s.logo}>
                        <Image src={Logo} alt="LOGO" />
                    </div>
                    <div className={s.socialMedia}>
                        <a href="#">
                            <Image src={Inst} alt={Inst} />
                        </a>
                        <a href="#">
                            <Image src={FB} alt={Inst} />
                        </a>
                        <a href="#">
                            <Image src={WU} alt={Inst} />
                        </a>
                        <a href="#">
                            <Image src={TG} alt={Inst} />
                        </a>
                    </div>
                </div>
                <div className={s.copyrights}>
                    <h1>Посилання</h1>
                    <Link href="/privacy-policy">Політика конфіденційності</Link>
                    <Link href="/processing-of-personal-data">Обробка персональних даних</Link>
                    <Link href="/cookie-policy">Політика cookie</Link>
                    <Link href="/oferta">Основні умови і положення договору про добровільну пожертву</Link>
                </div>
                <div className={s.callUs}>
                    <div className={s.phoneNum}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        <span>+41794038210</span>
                    </div>
                </div>
            </div>
            <h1>
                Copyright ©Amhelfenua {new Date().getFullYear()}
            </h1>
        </div>
    );
};

export default Footer;