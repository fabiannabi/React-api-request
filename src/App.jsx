import React, { useState } from "react";
import BeerCards from "./components/BeerCards";

import "./App.css";

function App() {
  //save the data gathered on data on a relation " variable  method to gather variable  how it will be stored"

  const [beers, setBeers] = useState([]);

  //make a request on mounted , [], to only run once
  // useEffect(() => {
  //   getBeerData();
  // }, []);

  //make the a function to get the response from api
  //first you make the request and make it a jason and then make the variable
  const getBeerData = async () => {
    fetch("https://api.punkapi.com/v2/beers/random")
      .then((response) => {
        return response.json();
      })
      .then((myjason) => {
        const data = myjason;
        console.log(data);
        setBeers(data);
      });
  };

  return (
    <div className="app">
      <div className="nav">
        <h2>Search For a Perfect Beer</h2>
        <button onClick={getBeerData}>Booze me up</button>
      </div>
      <div>
        {beers.map((beer) => (
          <BeerCards
            key={beer.id}
            name={beer.name}
            img={beer.image_url}
            description={beer.description}
            year={beer.first_brewed}
            foodpairing={beer.food_pairing}
          ></BeerCards>
        ))}
      </div>
    </div>
  );
}

export default App;
