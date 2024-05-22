"use client"
import React from 'react';
import {HeaderWrapper} from "@/features/header/styles";
import Slogan from "@/shared/slogan/slogan";
import Naming from "@/shared/naming/naming";
import Navbar from "@/shared/navbar/navbar";

const Header = () => {
    return (
        <HeaderWrapper>
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
        </HeaderWrapper>
    );
};

export default Header;