import React from "react";
import { Header } from "../Members/Members";
import { HeaderContainer } from "../Members/Members";
import { ContentContainer } from "../HeroSection/HeroSection";
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

const Image = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0px 2px 10px grey;

    @media (min-width: 1000px) {
        width: 60%;
    }
`

const Iframe = styled.iframe`
    border-radius: 12px;
    width: 100%;
    height: 250px;

    @media (min-width: 1000px) {
        width: 60%;
    }
`

const message: string = 'In 2019 AMAVI was given the opportunity to work alongside renowned dancer/choreographer John Huy Tran for the contemporary dance production GAIA WE ARE ONE. AMAVI wrote a 90 minute score which was performed live for audiences in Vietnam.'

const Gaia = () => {
    return(
        <PrimaryContainer>
            <HeaderContainer>
                <Header>GAIA WE ARE ONE</Header>
            </HeaderContainer>
            <ContentContainer>
                <Image data-aos="fade-down" src={require('../../images/tree-of-life.jpg')} alt='tree-of-life'/>
            </ContentContainer>
            <ContentContainer>
                <Text data-aos="fade-up">{message}</Text>
            </ContentContainer>
            <ContentContainer>
                <Iframe 
                    data-aos="fade-up"
                    title='spotifyFrame' 
                    src="https://open.spotify.com/embed/album/7C0cMJFcsdrsBOATua7dUo?utm_source=generator"  
                    frameBorder="0"  
                    >
                </Iframe>
            </ContentContainer>
        </PrimaryContainer>
    )
}

export default Gaia;