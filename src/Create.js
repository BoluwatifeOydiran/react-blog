import { useState } from "react";
import { useNavigate  } from "react-router-dom";
import { url } from "./api/server";

const Create = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  // const [author, setAuthor] = useState('yoshi');
  const [isLoading, setisLoading] = useState(false);
  let navigate = useNavigate();



  const handlesubmit = (e) => {
    e.preventDefault();
    const blog = {title, body}

    setisLoading(true);

    fetch(url, {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(blog)
    })
    .then(() => {
      console.log("new blog added");
      setisLoading(false);
      navigate("/")
    })
  }
  
  return ( 
   <div className="create">
     <form onSubmit={handlesubmit}>
       <label>Blog title:</label>
       <input
       type={`text`}
       required 
       value={title}
       onChange={(e) => setTitle(e.target.value)}
       />
       <label>Blog body:</label>
       <textarea
       required
       value={body}
       onChange = {(e) => setBody(e.target.value)} 
       />
       {/* <label>Blog author:</label>
       <select
       value={author}
       onChange={(e) => setAuthor(e.target.value)}
       > 
         <option value="mario">Mario</option>
         <option value="yoshi">Yoshi</option>
       </select> */}
       {!isLoading && <button>Add Blog</button>}
       {isLoading && <button>Loading</button>}
     </form>
   </div>
   );
}
 
export default Create;