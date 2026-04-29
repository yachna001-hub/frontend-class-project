import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
function BlogDetails() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const navigate = useNavigate();

    function fetchBlogDetails() {
        fetch(`http://localhost:5000/blogs/${id}`)
            .then(response => response.json())
            .then(data => setBlog(data))
            .catch(error => console.error('Error fetching blog details:', error));
    }

    function handleDelete() {
        fetch(`http://localhost:5000/blogs/${id}`, {
            method: 'DELETE',
        }).then(() => {
            navigate('/');
        }).catch(error => console.error('Error deleting blog:', error));

    }

    function handleUpdate() {
        navigate(`/update/${id}`);
    }

    useEffect(() => {
        fetchBlogDetails();
    }, [id]);

    return (
        <div>
            {blog && (
                <div>
                    <h2>{blog.title}</h2>
                    <img src={blog.img} alt={blog.title} width={500} />
                    <p>{blog.body}</p>
                    <div className="option" style={{ display: 'flex', gap: '10px' }}>
                        <button onClick={handleUpdate}>Update</button>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BlogDetails;