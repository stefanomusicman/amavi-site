import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 85%;
    box-shadow: 0px 2px 10px grey;
`

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const Image = styled.img`
    width: 80%;
    height: auto;
`

const Name = styled.h3`
    font-family: 'Montserrat';
    text-align: center;
    font-weight: bold;
`

const DescriptionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const Text = styled.p`
    text-align: center;
    font-family: 'Montserrat';
`

const MemberCard: React.FC<{ name: string, image: string, description: string }> = ({name, image, description}) => {
    return(
        <CardContainer>
            <ImageContainer>
                <Image src={image} alt='image'/>
            </ImageContainer>
            <Name>{name}</Name>
            <DescriptionContainer>
                <Text>{description}</Text>
            </DescriptionContainer>
        </CardContainer>
    )
}

export default MemberCard; 