import React from 'react';
import {NavBox, NavUlist, NavSearch, NavWrapper, Navlist, SearchShape} from "@/shared/navbar/styles";
import Image from "next/image";
import search from "../../../public/img/Search.svg"
import {AppLink} from "@/shared/AppLink";

const Navbar = () => {
    return (
        <NavWrapper>
            <NavBox>
                <NavUlist>
                    <Navlist><AppLink href={"/"}>Ақпарат</AppLink></Navlist>
                    <Navlist><AppLink href={"/adebiet"}>Әдебиет</AppLink></Navlist>
                    <Navlist><AppLink href={"/oner"}>Өнер</AppLink></Navlist>
                    <Navlist><AppLink href={"/gylym"}>Ғылым</AppLink></Navlist>
                    <Navlist><AppLink href={"/exclusive"}>Эксклюзив</AppLink></Navlist>
                    <Navlist><AppLink href={"/career"}>Карьера</AppLink></Navlist>
                    <Navlist><AppLink href={"/sport"}>Спорт</AppLink></Navlist>
                    <Navlist><AppLink href={"/tarih"}>Тарих</AppLink></Navlist>
                </NavUlist>
                <NavSearch>
                    <SearchShape>
                        <Image src={search} alt={"Search"} width={20} height={20}/>
                    </SearchShape>
                </NavSearch>
            </NavBox>
        </NavWrapper>
    );
};

export default Navbar;