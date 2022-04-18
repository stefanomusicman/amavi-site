import React from "react";
import styled from "styled-components";
import { PrimaryContainer } from "../HeroSection/HeroSection";
import { Header, HeaderContainer } from "../Members/Members";
import { Text } from "../HeroSection/HeroSection";
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsSpotify } from 'react-icons/bs';

const LinksBox = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    padding: 30px 0px;
`

const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
`

const Instagram = styled(BsInstagram)`
    width: 30px;
    height: 30px;
    color: black;

    &:hover {
        transform: scale(1.2);
    }
`

const Facebook = styled(BsFacebook)`
    width: 30px;
    height: 30px;
    color: black;

    &:hover {
        color: #4267B2;
        transform: scale(1.2);
    }
`

const Spotify = styled(BsSpotify)`
    width: 30px;
    height: 30px;
    color: black;

    &:hover {
        color: #1DB954;
        transform: scale(1.2);
    }
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
                <a href="https://www.instagram.com/amaviband/" target='_blank' rel="noreferrer"><Instagram /></a>
                <a href="https://www.facebook.com/amaviband/" target='_blank' rel="noreferrer"><Facebook /></a>
                <a href="https://open.spotify.com/artist/7boItbSCPYjXvWUg25iD9y" target='_blank' rel="noreferrer"><Spotify /></a>
            </LinksBox>
        </PrimaryContainer>
    )
}

export default Socials;