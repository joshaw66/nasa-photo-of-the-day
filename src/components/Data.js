import React, {useEffect, useState} from "react";
import Card from "./Card";
import axios from "axios";

function Data() {

let [Data, setData] = useState([])
useEffect(() => {
  axios
    .get("https://api.nasa.gov/planetary/apod?api_key=Ee9dNMn1hDshsByF3BRreZyMfgdQJvO9hbsie6lt")
    .then(response => {
      console.log(response.data);
      setData(response.data);
    })
    .catch(error => {
      console.log("No Data can be returned!", error);
    })
}, []);
return (
  <div className="image"> 
        <Card
            key={Data.id}
            title={Data.title}
            explanation={Data.explanation}
            date={Data.date}
            img = {Data.url}
        />
  </div>
);
}

export default Data;
