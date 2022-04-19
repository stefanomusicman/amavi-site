import React from "react";
import styled from "styled-components";

const NavContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-shadow: 0px 2px 10px grey;
`

const Amavi = styled.img`
    width: 30%;
    height: 30%;
    padding: 10px;

    @media (min-width: 700px) {
        width: 20%;
        height: 20%;
    }

    @media (min-width: 1000px) {
        width: 15%;
        height: 15%;
    }

    @media (min-width: 1300px) {
        width: 10%;
        height: 10%;
    }
`

const NavBar = () => {
    return(
        <NavContainer>
            <Amavi src={require('../../images/amavi-logo.png')} alt="logo"/>
        </NavContainer>
    )
}

export default NavBar;