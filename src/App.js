/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import "./App.css";
import Card from "./components/card";
import useInfiniteScroll from "./hooks/useInfiniteScroll";
import getCards from "./queries/query";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [cards, setCards] = useState([]);
  const cardsListRef = useRef(null);

  const onBottomReached = () => {
    setPageNumber(pageNumber + 1);
  };

  useInfiniteScroll(cardsListRef, onBottomReached);

  useEffect(() => {
    const updateCards = async () => {
      const updatedCards = await getCards(pageNumber);
      setCards([...cards, ...updatedCards]);
    };
    updateCards();
  }, [pageNumber]);
  console.log(cards.length);
  return (
    <div className="App">
      <h2 className="heading">Cards Project</h2>
      {cards.length > 0 ? (
        <div className="cards-list" ref={cardsListRef}>
          {cards.map((card) => (
            <Card title={card.title} body={card.body} />
          ))}
          <div className="loader">Loading ...</div>
        </div>
      ) : (
        <div className="no-records">
          <h3>Loading ....</h3>
        </div>
      )}
    </div>
  );
}

export default App;
