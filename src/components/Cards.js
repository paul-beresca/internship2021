import React from "react";
import Card from "./Card";
import "./App.css";
const Cards = ({ cards }) => {
  console.log(cards);
  return (
    <div>
      {cards.map((card) => (
        <Card title={card.title} card={card}></Card>
      ))}
    </div>
  );
};

export default Cards;
