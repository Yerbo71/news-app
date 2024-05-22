import React from 'react';
import {NavBox, NavUlist, NavSearch, NavWrapper, Navlist, SearchShape, NavText} from "@/shared/navbar/styles";
import Image from "next/image";
import search from "../../../public/img/Search.svg"
import {AppLink} from "@/shared/AppLink";

const Navbar = () => {
    return (
        <NavWrapper>
            <NavBox>
                <NavUlist>
                    <Navlist>
                        <AppLink href={"/"}>
                            <NavText>
                                Ақпарат
                            </NavText>
                        </AppLink>
                    </Navlist>
                    <Navlist>
                        <AppLink href={"/adebiet"}>
                            <NavText>
                                Әдебиет
                            </NavText>
                        </AppLink>
                    </Navlist>
                    <Navlist>
                        <AppLink href={"/oner"}>
                            <NavText>
                                Өнер
                            </NavText>
                        </AppLink>
                    </Navlist>
                    <Navlist>
                        <AppLink href={"/gylym"}>
                            <NavText>
                                Ғылым
                            </NavText>
                        </AppLink>
                    </Navlist>
                    <Navlist>
                        <AppLink href={"/exclusive"}>
                            <NavText>
                                Эксклюзив
                            </NavText>
                        </AppLink>
                    </Navlist>
                    <Navlist>
                        <AppLink href={"/career"}>
                            <NavText>
                                Карьера
                            </NavText>
                        </AppLink>
                    </Navlist>
                    <Navlist>
                        <AppLink href={"/sport"}>
                            <NavText>
                                Спорт
                            </NavText>
                        </AppLink>
                    </Navlist>
                    <Navlist>
                        <AppLink href={"/tarih"}>
                            <NavText>
                                Тарих
                            </NavText>
                        </AppLink>
                    </Navlist>
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