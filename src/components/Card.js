import React from "react";
import "./App.css";
const Card = ({ card }) => {
  return (
    <article className="card">
      <h1>{card.title}</h1>
      <img src={card.imageUrl} className="img"></img>
      <p className="description">{card.description}</p>
    </article>
  );
};

export default Card;
