import React from "react";
import "./Container.css";
import styled from "styled-components";

const MainDivStyled = styled.div`
background-color: lightgrey;
border: solid darkgrey;
padding: 2%;
`
const TitleH1 = styled.div`
color: white; 
font-size: 2rem;
padding-bottom: 2%;
padding-top: 2%;
background-color: gray;
font-family: helvetica;`

const PageStyle = styled.div`
color: black;
font-size: 1.5rem;
padding: 4%;`



function Container (props) {
    return(
        <MainDivStyled>
            <TitleH1>Title: {props.title}</TitleH1>
            <img src={props.image} alt= '' />
            <PageStyle>Description: {props.explanation}</PageStyle>
        </MainDivStyled>
    )
}

export default Container;