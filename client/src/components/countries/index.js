import React, {useState, useEffect} from "react"
import Axios from "axios"

function BlogIndex() {
//going to show every blog post in a table
    const [blogs, setBlogs] = useState([]);
    useEffect(()=> {
        Axios.get("/api/blogs")
            .then(result => setBlogs(result.data)) //our blods are under the property .data
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="container">
            <header>
                <h1>All Blogs</h1>
            </header>

            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Author</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.map(blog => (
                            <tr key={blog._id}>
                                <td>{blog.title}</td>
                                <td>{blog.status}</td>
                                <td>{blog.author && blog.author.firstName} {blog.author && blog.author.lastName}</td>
                                <td>
                                    <Link to={`/blogs/${blog._id}/edit`}>edit</Link>|
                                    <Link to={`/blogs/${blog._id}/destroy`}>delete</Link>
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