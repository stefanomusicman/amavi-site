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
`

const NavBar = () => {
    return(
        <NavContainer>
            <Amavi src={require('../../images/amavi-logo.png')} alt="logo"/>
        </NavContainer>
    )
}

export default NavBar;