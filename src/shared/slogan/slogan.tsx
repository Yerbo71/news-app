import React from 'react';
import style from './slogan.module.css';

const Slogan = ({children}) => {
    return (
        <div className={style.}>
            {children}
        </div>
    );
};

export default Slogan;