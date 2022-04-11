import React from "react";
import styled from "styled-components";

export const PrimaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 15px;
`

const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    width: 80%;
`

const Image = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0px 2px 10px grey;
`

const Text = styled.p`
    font-family: 'Poppins';
    text-align: center;
`

const HeroSection = () => {
    return(
        <PrimaryContainer>
            <ContentContainer>
                <Image src={require('../../images/Amavi-band.jpg')} alt='band'/>
            </ContentContainer>
            <ContentContainer>
                <Text>Amavi is a five piece band from Montréal that can be described as alternative rock with extra flair.</Text>
            </ContentContainer>
        </PrimaryContainer>
    )
}

export default HeroSection;