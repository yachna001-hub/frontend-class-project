import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

function Update() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [img, setImg] = useState('');
  const [author, setAuthor] = useState('mario');

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/blogs/${id}`)
      .then(response => response.json())
      .then(data => {
        setTitle(data.title);
        setBody(data.body);
        setImg(data.img);
        setAuthor(data.author);
      })
      .catch(error => console.error('Error fetching blog details:', error));
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();
    const blog = { title, body, img, author };

    fetch(`http://localhost:5000/blogs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(blog)
    }).then(() => {
      navigate('/');
    }).catch(error => console.error('Error updating blog:', error));
  }

  return (
    <div className="create">
      <h2>Update Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Blog Image:</label>
        <input
          type="text"
          required
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button>Update Blog</button>
      </form>
    </div>
  );
}

export default Update;