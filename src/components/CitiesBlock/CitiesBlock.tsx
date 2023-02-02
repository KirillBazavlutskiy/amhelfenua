import React, { FC } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import s from './CitiesBlock.module.scss';

import Help1 from '../../assets/Slider/1.png';
import Help2 from '../../assets/Slider/2.png';
import Help3 from '../../assets/Slider/3.png';
import Help4 from '../../assets/Slider/4.png';
import Help5 from '../../assets/Slider/5.png';
import Help6 from '../../assets/Slider/6.png';

interface CitiesBlockProps {
	children: React.ReactNode | null;
}
const CitiesBlock: FC<CitiesBlockProps> = ({children}) => {

	const arrowPrev = (onCLickHandler: (event: React.MouseEvent<HTMLDivElement>) => void) => {
		return (
			<div onClick={onCLickHandler} className={s.arrowPrev}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
				</svg>
			</div>
		)
	};

	const arrowNext = (onCLickHandler: (event: React.MouseEvent<HTMLDivElement>) => void) => (
		<div onClick={onCLickHandler} className={s.arrowNext}>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
			</svg>
		</div>
	);

	return (
		<div className={s.container}>
			<Carousel
				showArrows={true}

				renderArrowPrev={arrowPrev}
				renderArrowNext={arrowNext}

				axis='horizontal'
				autoPlay={true}
				infiniteLoop={true}
				showThumbs={false}
				showStatus={false}
				showIndicators={false}
			>
				<div className={s.cityBlock}>
					<img src={Help1} alt='HELP' />
				</div>
				<div className={s.cityBlock}>
					<img src={Help2} alt='HELP' />
				</div>
				<div className={s.cityBlock}>
					<img src={Help3} alt='HELP' />
				</div>
				<div className={s.cityBlock}>
					<img src={Help4} alt='HELP' />
				</div>
				<div className={s.cityBlock}>
					<img src={Help5} alt='HELP' />
				</div>
				<div className={s.cityBlock}>
					<img src={Help6} alt='HELP' />
				</div>
			</Carousel>
			<div className={s.grayBG}/>
			<div className={s.childrenBlock}>
				{children}
			</div>
		</div>
	);
};

export default CitiesBlock;
