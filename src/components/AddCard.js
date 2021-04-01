import React from "react";
import { useState } from "react";
const AddCard = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  //DE CREAT FUNCTIA ONSUBMIT
  const onSubmit = (e) => {
    //WE USE THIS TO CHECK IF EVERYTHING IS OK IF EVERY INPUT IS FILLEN AND AFTER THIS >>>>
    if (!title) {
      alert("Please add  a title");
    }

    //ajunge
    onAdd({ title, imageUrl, description }); //THEN WE CALL THE ON ADD FUNCTION

    setTitle("");
    setImageUrl("");
    setDescription("asd");
  };

  return (
    <form className="add-card" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Title</label>
        <input
          type="text"
          placeholder="Add Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <label>Image Url</label>
        <input
          type="text"
          placeholder="Add image Url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <label>Description</label>
        <input
          type="text"
          placeholder="Add description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
      </div>
      <input className="btn" type="submit" value="Save Card"></input>
    </form>
  );
};

export default AddCard;
