import React from "react";
import { Header } from "../Members/Members";
import { HeaderContainer } from "../Members/Members";
import { ContentContainer } from "../HeroSection/HeroSection";
import { Image } from "../HeroSection/HeroSection";
import { Text } from "../HeroSection/HeroSection";
import styled from "styled-components";

const PrimaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 5em;
`

const Iframe = styled.iframe`
    border-radius: 12px;
    width: 100%;
    height: 250px;
`

const message: string = 'In 2019 AMAVI was given the opportunity to work alongside renowned dancer/choreographer John Huy Tran for the contemporary dance production GAIA WE ARE ONE. AMAVI wrote a 90 minute score which was performed live for audiences in Vietnam.'

const Gaia = () => {
    return(
        <PrimaryContainer>
            <HeaderContainer>
                <Header>GAIA WE ARE ONE</Header>
            </HeaderContainer>
            <ContentContainer>
                <Image src={require('../../images/tree-of-life.jpg')} alt='tree-of-life'/>
            </ContentContainer>
            <ContentContainer>
                <Text>{message}</Text>
            </ContentContainer>
            <ContentContainer>
                <Iframe 
                    title='spotifyFrame' 
                    src="https://open.spotify.com/embed/album/7C0cMJFcsdrsBOATua7dUo?utm_source=generator"  
                    frameBorder="0"  
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
                </Iframe>
            </ContentContainer>
        </PrimaryContainer>
    )
}

export default Gaia;