import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

function New() {
  const [inputs, setInputs] = useState({}); //returns two values. an object and an update function
  const [redirect, setRedirect] = useState(false);

  function handleInputChange(event) {
    //Make sure the event has completed before listening for the next event. Avoids overwritting the event
    event.persist();

    const {name, value} = event.target; //uses destructuring

    setInputs(inputs => {
      return {
        ...inputs, [name]: value //this is called a shallow merge. Not sure how it works. the ... is called Spread operator
      };
    });
  }

  function handleSubmit(event) {
    //Prevent the form from reloading the page/ navigating somewhere on submit, we want to stay here
    event.preventDefault();

    //Access the enpoint in the node server
    Axios.post("/api/countries", {
        name: inputs.name,
        population: inputs.population,
        export: inputs.export
    })
      .then(resp => setRedirect(true))
      .catch(err => console.log(err));
  }

  if (redirect) return <Redirect to="/" />;

  return (
    <div className="container">
      <header>
        <h1>New Country</h1>
      </header>

      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              name="name"
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Population</label>
            <input
              className="form-control"
              name="population"
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Export</label>
            <select
              className="form-control"
              name="export"
              required
              onChange={handleInputChange}
            >
              <option value="AGRICULTURE">Agriculture</option>
              <option value="WATER">Water</option>
              <option value="MINERALS">Minerals</option>
              <option value="RARE MINERALS">Rare Minerals</option>
              <option value="LUMBER">Lumber</option>
            </select>
          </div>

          <div className="form-group">
            <button className="btn btn-dark" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default New;
