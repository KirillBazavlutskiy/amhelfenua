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
        score: 5
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

                axis='horizontal'
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={true}
                showStatus={false}
                showIndicators={false}
            >
                {
                    Reviews.map(e => (
                        <div className={s.reviewBlock}>
                            <div className={s.reviewText}>
                                <p>{e.text}</p>
                                <h1>{e.name}</h1>
                            </div>
                        </div>
                    ))
                }
            </Carousel>
        </div>
    );
};

export default ReviewsBlock;