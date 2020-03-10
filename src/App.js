import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";

function App() {
  const [photo, setPhoto] = useState({})

  useEffect(()=> {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=pXRAICUDdPDAkGlYXxbE4dbDJZ8KVmUxfH0dQtUK')
    .then(response => {
      console.log("hi",response);
        setPhoto(response.data);
    })
    .catch(error => {
    console.log("Sorry, no picture today", error);
    });
  },[]);
  
  return (
    
    <div className="App">
      <Header />
      <Container 
      explanation={photo.explanation} 
      title={photo.title} 
      image ={photo.url} 
      date={photo.date}
      />
    </div>
  );
}

export default App;
 