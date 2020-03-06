import React from "react";
import "./Container.css";
import styled from "styled-components";

const MainDivStyled = styled.div`
background-color: red;
`
const Container = (props) => {
    return(
        <MainDivStyled>
            <h1>Title: {props.title}</h1>
            <img src={props.image} alt={props.title}/>
            <p>Description: {props.explanation}</p>
        </MainDivStyled>
    )
}

export default Container;