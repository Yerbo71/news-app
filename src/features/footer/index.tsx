"use client";
import React from 'react';
import {FooterBox, FooterHr, FooterWrapper} from "@/features/footer/styles";
import NavFoot from "@/shared/navfoot/navfoot";

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterBox>
                <NavFoot/>
            </FooterBox>
            <FooterHr/>
            <FooterBox>
                Байлыныс үшін: magzhankz@gmail.com
            </FooterBox>
            <FooterHr/>
            <FooterBox>
                Барлық құқықтар сақталған@2024
            </FooterBox>
        </FooterWrapper>
    );
};

export default Footer;