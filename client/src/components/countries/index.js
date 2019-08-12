import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import Axios from "axios";

function BlogIndex() {
//going to show every blog post in a table
    const [country, setCountry] = useState([]);
    useEffect(()=> {
        Axios.get("/api/countries")
            .then(result => setCountry(result.data)) //our blods are under the property .data
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="container">
            <header>
                <h1>All Countries</h1>
            </header>

            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Country Name</th>
                            <th>Population</th>
                            <th>Export</th>
                        </tr>
                    </thead>
                    <tbody>
                        {country.map(country => (
                            <tr key={country._id}>
                                <td><Link to={`/${country._id}`}>{country.name}</Link></td>
                                <td>{country.population}</td>
                                <td>{country.export}</td>
                                <td>
                                    <Link to={`/${country._id}/edit`}>edit</Link>|
                                    <Link to={`/${country._id}/destroy`}>delete</Link>
                                    {/*TODO: May have to change to /:id/edit*/}
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default BlogIndex;