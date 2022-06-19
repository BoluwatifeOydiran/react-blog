import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";
import { url } from "./api/server";

const BlogDetails = () => {
  let navigate = useNavigate();

  const { id, userId } = useParams();
  const {
    data: blog,
    error,
    isLoading,
  } = useFetch(`${url}/${id}`);

  const handleDelete = () => {
    fetch(`${url}/${id}`, {
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
          <p> Written by <b>user {blog.userId}</b> </p>
          <div> {blog.body} </div>
        </article>
      )}
      <button onClick={handleDelete}> Delete blog </button>
    </div>
  );
};

export default BlogDetails;
