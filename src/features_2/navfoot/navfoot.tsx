import React from 'react';
import {FootLink, NavFootList, NavFootUList} from "@/features_2/navfoot/styels";

const NavFoot = () => {
    return (
        <NavFootUList>
            <NavFootList>
                <FootLink href={"/"}>Ақпарат</FootLink>
                <FootLink href={"/adebiet"}>Әдебиет</FootLink>
                <FootLink href={"/oner"}>Өнер</FootLink>
                <FootLink href={"/gylym"}>Ғылым</FootLink>
                <FootLink href={"/exclusive"}>Эксклюзив</FootLink>
                <FootLink href={"/career"}>Карьера</FootLink>
                <FootLink href={"/sport"}>Спорт</FootLink>
                <FootLink href={"/tarih"}>Тарих</FootLink>
            </NavFootList>
        </NavFootUList>
    );
};

export default NavFoot;