import React from "react";
import styled from "styled-components";
import { PrimaryContainer } from "../HeroSection/HeroSection";
import { ContentContainer } from "../HeroSection/HeroSection";
import { Header, HeaderContainer } from "../Members/Members";
import { Text } from "../HeroSection/HeroSection";
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsSpotify } from 'react-icons/bs';

const LinksBox = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
`

const Socials = () => {
    return(
        <PrimaryContainer>
            <HeaderContainer>
                <Header>Contact Us</Header>
            </HeaderContainer>
            <ContentContainer>
                <Text>Come check out us out on our social media accounts to stay up to date with what we're up to!</Text>
            </ContentContainer>
            <LinksBox>
                <BsInstagram />
                <BsFacebook />
                <BsSpotify />
            </LinksBox>
        </PrimaryContainer>
    )
}

export default Socials;