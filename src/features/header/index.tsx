import React from 'react';
import Slogan from "@/shared/slogan/slogan";
import Naming from "@/shared/naming/naming";
import Navbar from "@/shared/navbar/navbar";
import styles from "./styles.module.css";

const Header = () => {
    return (
        <header className={styles.headerWrapper}>
            <Slogan>
                Мен жастарға сенемін
            </Slogan>
            <Naming>
                Magzhan.kz
            </Naming>
            <Slogan>
                Мағжан Жұмабаев
            </Slogan>
            <Navbar/>
        </header>
    );
};

export default Header;