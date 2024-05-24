"use client";
import React from 'react';
import {FooterBox, FooterHr, FooterWrapper} from "@/features/footer/styles";
import NavFoot from "@/features_2/navfoot/navfoot";

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterBox>
                <NavFoot/>
            </FooterBox>
            <FooterHr/>
            <FooterBox style={{opacity: 0.7}}>
                Байлыныс үшін: magzhankz@gmail.com
            </FooterBox>
            <FooterHr/>
            <FooterBox style={{opacity: 0.7}}>
                Барлық құқықтар сақталған@2024
            </FooterBox>
        </FooterWrapper>
    );
};

export default Footer;