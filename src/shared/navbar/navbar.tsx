"use client";
import React from 'react';
import { NavBox, NavUlist, NavSearch, NavWrapper, Navlist, SearchShape, NavText } from "@/shared/navbar/styles";
import Image from "next/image";
import search from "../../../public/img/Search.svg";
import { AppLink } from "../appLink";
import { usePathname } from "next/navigation";
import {Link} from "@/shared/navbar/types";

const Navbar: React.FC = () => {
    const pathname = usePathname();

    const links:Link[] = [
        { href: "/", label: "Ақпарат" },
        { href: "/adebiet", label: "Әдебиет" },
        { href: "/oner", label: "Өнер" },
        { href: "/gylym", label: "Ғылым" },
        { href: "/exclusive", label: "Эксклюзив" },
        { href: "/career", label: "Карьера" },
        { href: "/sport", label: "Спорт" },
        { href: "/tarih", label: "Тарих" },
    ];

    return (
        <NavWrapper>
            <NavBox>
                <NavUlist>
                    {links.map((link) => (
                        <Navlist key={link.href}>
                            <AppLink href={link.href}>
                                <NavText isActive={pathname === link.href}>
                                    {link.label}
                                </NavText>
                            </AppLink>
                        </Navlist>
                    ))}
                </NavUlist>
                <NavSearch>
                    <SearchShape>
                        <Image src={search} alt={"Search"} width={20} height={20} />
                    </SearchShape>
                </NavSearch>
            </NavBox>
        </NavWrapper>
    );
};

export default Navbar;
