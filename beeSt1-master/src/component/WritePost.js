import React,{useState} from "react";
import './WritePost.css'

const WritePost = () => {
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const [textarea, setTextarea] = useState(
    "Write Your Content"
  );

  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    setTextarea(event.target.value);
  
  }
  return (
    <>
      <div className="contain">
        <div className="wrapper">




  <form onSubmit={handleSubmit}>
    <label><b>Enter your Name :</b> 
    <input 
      type="text" 
      name="username" 
      value={inputs.username || ""} 
      onChange={handleChange}
    />
    </label>
    <br/><br/>
    <label><b>Enter your Title :</b>
      <input 
        type="text" 
        name="title" 
        value={inputs.title || ""} 
        onChange={handleChange}
      />
      </label>
      <br/><br/>
      <textarea rows={20} cols={200} value={textarea} onChange={handleChange} />
      <input type="submit" />
      <br/><br/>
  </form>

        </div>
      </div>
    </>
  );
};

export default WritePost;
