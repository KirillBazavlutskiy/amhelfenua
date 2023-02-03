import React from "react";

import {Carousel} from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import s from './ReviewsBlock.module.scss';

interface Review {
    name: string;
    text: string;
    score: number;
}

const Reviews: Review[] = [
    {
        name: "Анастасія",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
            "Ut enim ad minim veniam.",
        score: 5
    },
    {
        name: "Максим",
        text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis " +
            "praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias " +
            "excepturi sint occaecati cupiditate non provident.",
        score: 4
    },
    {
        name: "Юлія",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        score: 5
    },
    {
        name: "Софія",
        text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis " +
            "praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.",
        score: 5
    }
]

const ReviewsBlock = () => {
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

                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                showIndicators={true}
            >
                {
                    Reviews.map((e, index ) => {
                        const stars: React.ReactNode[] = [];
                        for (let i = 0; i < e.score; i++) {
                            stars.push(
                                <div key={i}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            )
                        }
                        return (
                            <div key={index} className={s.reviewBlock}>
                                <p>{e.text}</p>
                                <h1>{e.name}</h1>
                                <div className={s.stars}>
                                    {stars}
                                </div>
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    );
};

export default ReviewsBlock;