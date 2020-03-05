import React, {useEffect, useState} from "react";
import "../../src/Header.css";
import styled from "styled-components";

const HeaderStyle = styled.h1`
color: red;
`;
const Header = () =>{
    return(
        <div>
            <h1>Here is the Nasa Photo of the Day</h1>
            <HeaderStyle>Here is the Nasa Photo of the Day</HeaderStyle>
        </div>
    )
}

export default Header;
