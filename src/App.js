import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./components/Cards";

import dummyData from "../src/dummyData";
import AddCard from "./components/AddCard";
function App() {
  const data = dummyData;
  const [cards, setCards] = useState(data);

  const addCard = (newCard) => {
    console.log("succes");
    console.log(newCard);
    setCards([...cards, newCard]);
    console.log(cards);
  };
  return (
    <div className="App">
      <Header />
      <AddCard onAdd={addCard}></AddCard>
      <Cards cards={cards}></Cards>
      <Footer />
    </div>
  );
}

export default App;
