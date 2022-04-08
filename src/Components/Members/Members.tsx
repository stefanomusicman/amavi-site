import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { PrimaryContainer } from "../HeroSection/HeroSection";
import MemberCard from "./MemberCard";

type member = {
    name: string,
    image: string,
    description: string
    id: number
}

const members: member[] = [
    {
        name: 'Stefano',
        image: '../../images/stefano.jpg',
        description: 'Stefano is born and raised in Montreal and began playing guitar at age 12. Having been playing in bands for over 10 years his love music continues to grow.',
        id: 1
    },
    {
        name: 'Massimo',
        image: '../../images/massimo.jpg',
        description: 'Massimo is born and raised in Montreal and began playing guitar at age 12. Having been playing in bands for over 10 years his love music continues to grow.',
        id: 2
    }
]

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const Header = styled.h2`
    font-family: 'Montserrat';
`

const Carousel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: auto;
`

const Members = () => {
    return(
        <PrimaryContainer>
            <HeaderContainer>
                <Header>Members</Header>
            </HeaderContainer>
            <Carousel>
                <Swiper 
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                        }}
                    navigation={true}
                    modules={[Pagination]}
                    className='mySwiper'
                    >
                    {members.map((member) => <SwiperSlide> <MemberCard name={member.name} image={member.image} description={member.description} key={member.id}/> </SwiperSlide>)}
                </Swiper>
            </Carousel>
        </PrimaryContainer>
    )
}

export default Members;