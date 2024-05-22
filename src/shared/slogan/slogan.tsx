"use client"
import React from 'react';
import style from './slogan.module.css';
interface SloganProps {
    children: React.ReactNode
}

const Slogan:React.FC<SloganProps> = ({children}) => {
    return (
        <div className={style.sloganHolder}>
            {children}
        </div>
    );
};

export default Slogan;