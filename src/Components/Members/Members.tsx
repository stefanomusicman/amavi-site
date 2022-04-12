import React from "react";
import styled from "styled-components";
import { PrimaryContainer } from "../HeroSection/HeroSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MemberCard from "./MemberCard";
import { Pagination} from "swiper";

type member = {
    name: string,
    image: any,
    description: string
    id: number
}

const members: member[] = [
    {
        name: 'Stefano',
        image: <img src={require('../../images/stefano.jpg')} alt='stefano' style={{width: '60%', height: 'auto', borderRadius: '10px', boxShadow: '0px 2px 10px grey'}}/>,
        description: 'Stefano is born and raised in Montreal and began playing guitar at age 12. Having been playing in bands for over 10 years his love music continues to grow.',
        id: 1
    },
    {
        name: 'Massimo',
        image: <img src={require('../../images/massimo.jpg')} alt='massimo' style={{width: '60%', height: 'auto', borderRadius: '10px', boxShadow: '0px 2px 10px grey'}}/>,
        description: 'Massimo is born and raised in Montreal and began playing guitar at age 12. Having been playing in bands for over 10 years his love music continues to grow.',
        id: 2
    }
]

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const Header = styled.h2`
    font-family: 'Montserrat';
`

const Carousel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 35em;
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
                    navigation={false}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {members.map((member) => <SwiperSlide key={member.id}> <MemberCard key={member.id} image={member.image} name={member.name} description={member.description}/> </SwiperSlide>)}
                </Swiper>
            </Carousel>
        </PrimaryContainer>
    )
}

export default Members;