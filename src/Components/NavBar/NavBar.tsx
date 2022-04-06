import React from "react";
import styled from "styled-components";

const NavContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-shadow: 0px 1px 25px grey;
`

const NavBar = () => {
    return(
        <NavContainer>
            <h2>Amavi</h2>
        </NavContainer>
    )
}

export default NavBar;