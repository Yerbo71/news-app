import React from 'react';
import style from './slogan.module.css';
import Link from "next/link";
interface SloganProps {
    children: React.ReactNode
}

const Slogan:React.FC<SloganProps> = ({children}) => {
    return (
        <Link href={"/"}>
            <div className={style.sloganHolder}>
                {children}
            </div>
        </Link>

    );
};

export default Slogan;