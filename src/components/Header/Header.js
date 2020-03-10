import React from "react";
import "./Header.css";
import styled from "styled-components";

const HeaderStyle = styled.h1`
color: white;
padding: 4%;
text-shadow: 4px 4px black;
font-size: 4rem;
`;
const Header = () =>{
    return(
        <div>
            <HeaderStyle>NASA PHOTO OF THE DAY</HeaderStyle>
        </div>
    )
}

export default Header;
