"use client"
import React from 'react';
import style from './naming.module.css';
import Link from "next/link";

interface NamingProps {
    children: React.ReactNode
}

const Naming:React.FC<NamingProps> = ({children}) => {
    return (
        <Link href={"/"}>
            <div className={style.namingHolder}>
                {children}
            </div>
        </Link>
    );
};

export default Naming;