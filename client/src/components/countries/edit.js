import React, {useEffect, useState} from "react";
import {Redirect} from "react-router-dom";
import Axios from "axios";

function Edit(props) {
    const [inputs, setInputs] = useState({});
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        Axios.get(`/api/countries/${props.match.params.id}`)
            .then(result => setInputs(result.data)) //give it the whole result.data object
            .catch(err => console.error(err));
    }, [props]);

    function handleSubmit(event){
        event.preventDefault();
        Axios.post("/api/countries/update", {
                id : props.match.params.id,
                name: inputs.name,
                population: inputs.population,
                export: inputs.export
            })
            .then(() => setRedirect(true))
            .catch(err => console.error(err));
    }

    function handleInputChange(event){
        event.persist();
        const{name, value} = event.target;
        setInputs(inputs => {
            inputs[name] = value;
            return inputs;
        });
    }

    if(redirect) return <Redirect to="/"/>

    if(inputs.export != null) {
    return (
        <div className="container">
      <header>
        <h1>Edit Country</h1>
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
              defaultValue={inputs.name}
            />
          </div>

          <div className="form-group">
            <label>Population</label>
            <input
              className="form-control"
              name="population"
              required
              onChange={handleInputChange}
              defaultValue={inputs.population}
            />
          </div>

          <div className="form-group">
            <label>Export</label>
            <select
              className="form-control"
              name="export"
              required
              onChange={handleInputChange}
              defaultValue={inputs.export.toUpperCase()}
            >
              <option value="AGRICULTURE">Agriculture</option>
              <option value="WATER">Water</option>
              <option value="MINERALS">Minerals</option>
              <option value="RARE MATERIALS">Rare Materials</option>
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
    else {
      return null;
    }
}

export default Edit;

