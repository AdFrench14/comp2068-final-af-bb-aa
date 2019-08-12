import React, {useState, useEffect} from "react";
import Axios from "axios";

function Show(props) {
    const [country, setCountry] = useState({});
    console.log("GOT TO REACT SHOW FUNCTION");
    console.log(props.match.params.id);
    useEffect(() => {
        Axios.get(`/api/countries/${props.match.params.id}`)
            .then(result => setCountry(result.data))
            .catch(err => console.error(err));
    }, [props]);

    return (
        <div className="container">
            <header><h1>{country.name}</h1></header>
            <div><h2>Population: </h2>{country.population}</div>
            <div><h2>Export: </h2>{country.export}</div>
        </div>
    );
}

export default Show;