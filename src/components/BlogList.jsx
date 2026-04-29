import Blog from "./Blog";
import { Link } from "react-router";
import { createContext, useEffect, useState } from "react";
const LikeContext = createContext();

function BlogList() {
const [posts, setPosts] = useState([]);
  const [like, setLike] = useState(5);
  const [isdataLoading, setIsDataLoading] = useState(true);
  useEffect(()=>{
    fetch('http://localhost:5000/blogs')
    .then(response => response.json())
    .then(data => {
     setPosts(data);
     setIsDataLoading(false);
    })
    .catch(error => console.error('Error fetching posts:', error));
  },[]); 
      return (
        <div>
        <LikeContext.Provider value={like}> 
            {isdataLoading ? <p>Loading...</p> : null}
            {posts.map(post=>(
            <div key={post.id}>
                <Link to={`/blogs/${post.id}`}>
                    <Blog blog={post} /> 
                </Link>              
            </div>
        ))}
        </LikeContext.Provider>
        </div>
    )
}
export default BlogList;
export {LikeContext};
