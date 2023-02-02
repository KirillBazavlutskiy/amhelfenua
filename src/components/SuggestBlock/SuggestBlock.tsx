import React, { FC } from 'react';
import s from './SuggestBlock.module.scss'
interface SuggestBlockProps {
    children: React.ReactNode | null;
}
const SuggestBlock: FC<SuggestBlockProps> = ({ children }) => {
    return (
        <div className={s.container}>
            <div className={s.childrenBlock}>
                {children}
            </div>
            <div className={s.grayBG}/>
        </div>
    );
};

export default SuggestBlock;