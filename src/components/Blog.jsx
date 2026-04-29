import { useContext } from "react";
import {LikeContext} from "./BlogList";
function Blog({ blog }) {
  const like = useContext(LikeContext);
  return (
    <div>
      <h2>{blog.title}</h2>
      <img src={blog.img} alt="blog image" width={500} />
      <p>Written by {blog.author}</p>      
    </div>
  );
}

export default Blog;
