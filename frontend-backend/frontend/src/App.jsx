import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  async function getResponse() {
    // const response = await fetch('http://localhost:3000/');
    // const data = await response.json();
    // console.log(data);
    //axios is better than fetch
    axios
      .get("http://localhost:3000/")
      .then((response) => {
        console.log(response.data);
        const [name, age] = [response.data.name, response.data.age];
        // Set the name and age in the state to display them on the browser
        setName(name);
        setAge(age);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <h1>Welcome to the React App</h1>
      <h2>Name is: {name}</h2>
      <h3>Age is : {age}</h3>
      <button onClick={() => getResponse()}>send</button>
    </div>
  );
};

export default App;
