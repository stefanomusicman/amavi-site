import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40em;
`

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
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
    width: 90%;

    @media (min-width: 700px) {
        width: 60%;
    }
`

const Text = styled.p`
    text-align: center;
    font-family: 'Montserrat';
`

const MemberCard: React.FC<{ name: string,  description: string, image: any }> = ({name,  description, image}) => {
    return(
        <CardContainer>
            <ImageContainer>
                {image}
            </ImageContainer>
            <Name>{name}</Name>
            <DescriptionContainer>
                <Text>{description}</Text>
            </DescriptionContainer>
        </CardContainer>
    )
}

export default MemberCard; 