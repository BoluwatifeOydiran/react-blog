import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
  let navigate = useNavigate();

  const { id } = useParams();
  const {
    data: blog,
    error,
    isLoading,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="blog-details">
      {isLoading && <p>Loading ...</p>}
      {error && <p> {error} </p>}
      {blog && (
        <article>
          <h2> {blog.title} </h2>
          <p> Written by {blog.author} </p>
          <div> {blog.body} </div>
        </article>
      )}
      <button onClick={handleDelete}> Delete blog </button>
    </div>
  );
};

export default BlogDetails;
