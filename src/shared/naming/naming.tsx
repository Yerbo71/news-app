"use client"
import React from 'react';
import style from './naming.module.css';

const Naming = ({children}) => {
    return (
        <div className={style.namingHolder}>
            {children}
        </div>
    );
};

export default Naming;