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
    Axios.post("/api/blogs", {
      blog: {
        title: inputs.title,
        content: inputs.content,
        status: inputs.status
      }
    })
      .then(resp => setRedirect(true))
      .catch(err => console.log(err));
  }

  if (redirect) return <Redirect to="/blogs" />;

  return (
    <div className="container">
      <header>
        <h1>New Blog Post</h1>
      </header>

      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              className="form-control"
              name="title"
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Content</label>
            <input
              className="form-control"
              name="content"
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Status</label>
            <select
              className="form-control"
              name="status"
              required
              onChange={handleInputChange}
            >
              <option value="DRAFT">draft</option>
              <option value="PUBLISHED">published</option>
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
