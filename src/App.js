import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";

function App() {
  const [photoData, setPhotoData] = useState("")
  useEffect(()=> {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=Ee9dNMn1hDshsByF3BRreZyMfgdQJvO9hbsie6lt`)
    .then(response =>{
      console.log (response);
        setPhotoData(response.data) 
    })
  .catch(error =>{
    console.log("Sorry, no picture today", error);
  });
  }, []);
  
  return (

    <div className="App">
      <Header />
      <Container explanation={photoData.explanation} title={photoData.title} image ={photoData.image} date={photoData.date}/>
      </div>
  );
}

export default App;
 