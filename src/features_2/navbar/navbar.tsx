"use client";
import React, { useEffect, useState } from 'react';
import {
    NavBox,
    NavUlist,
    NavSearch,
    NavWrapper,
    Navlist,
    SearchShape,
    NavText,
    FormSearch
} from "@/features_2/navbar/styles";
import Image from "next/image";
import search from "../../../public/svg/Search.svg";
import { AppLink } from "@/shared/appLink";
import { usePathname } from "next/navigation";
import { Link } from "@/features_2/navbar/types";
import { AppInput } from "@/shared/appInput";
import { getData } from "@/request/fetch/fetch";

const Navbar: React.FC = () => {
    const pathname = usePathname();
    const [isInput, setIsInput] = useState(false);
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);

    const links: Link[] = [
        { href: "/", label: "Ақпарат" },
        { href: "/adebiet", label: "Әдебиет" },
        { href: "/oner", label: "Өнер" },
        { href: "/gylym", label: "Ғылым" },
        { href: "/exclusive", label: "Эксклюзив" },
        { href: "/career", label: "Карьера" },
        { href: "/sport", label: "Спорт" },
        { href: "/tarih", label: "Тарих" },
    ];

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetchData();
    };

    const fetchData = async () => {
        const data = await getData(page, query);
        console.log("Data fetched:", data);
    };

    useEffect(() => {
        fetchData();
    }, [query, page]);

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
                    <FormSearch onSubmit={handleFormSubmit}>
                        {isInput && <AppInput type="text" placeholder="Ізде" value={query} onChange={(e) => setQuery(e.target.value)} />}
                        <SearchShape>
                            <Image src={search} alt={"Search"} width={20} height={20} onClick={() => setIsInput(!isInput)} />
                        </SearchShape>
                    </FormSearch>
                </NavSearch>
            </NavBox>
        </NavWrapper>
    );
};

export default Navbar;
