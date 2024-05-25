import React from 'react';
import Slogan from "@/widgets/appSlogan/slogan";
import Naming from "@/widgets/appNaming/naming";
import Navbar from "@/features_2/navbar/navbar";
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