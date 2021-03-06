import React, { useState } from "react";
import fire from "../config/fire-conf";

const CreatePost = () => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
   
    fire.firestore().collection("Blog").add({
      title: title,
      content: content,
    });

    console.log({
      title: title,
      content: content,
    });
   
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h2>Add Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Title
          <br />
          <input
            type="text"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          Content
          <br />
          <textarea
            value={content}
            onChange={({ target }) => setContent(target.value)}
          />
        </div>
        <button type="submit">Save</button>
      </form>
      {title} 
      <br/>
      {content}
    </div>
  );
};

export default CreatePost;
