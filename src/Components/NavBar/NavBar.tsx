import React from "react";
import styled from "styled-components";

const NavContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-shadow: 0px 2px 10px grey;
`

const Amavi = styled.h2`
    font-family: 'Montserrat';
`

const NavBar = () => {
    return(
        <NavContainer>
            <Amavi>AMAVI</Amavi>
        </NavContainer>
    )
}

export default NavBar;