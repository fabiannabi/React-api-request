import React from "react";

// the props from the api, then passed to the father and last to the child

//if ypu have an array on props , you need to loop again with map
function BeerCards({ name, img, description, year, foodpairing }) {
  return (
    <div className="beerCard">
      <div className="BeerInfo">
        <h3>{name}</h3>
        <img src={img} alt="beer can" />
        <p className="description">{description}</p>
        <p className="brewed">Brewed since : {year}</p>
        <hr></hr>
        <div className="beerFoods">
          <h3>Try this foods...</h3>
          <ul>
            {foodpairing.map(food => (
              <li key={food}>{food}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BeerCards;
