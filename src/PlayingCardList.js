import React from 'react';
import useAxios from './hooks/useAxios';
import PlayingCard from './PlayingCard';

// Formatting function for playing cards data
const formatPlayingCardData = response => response.cards.map(card => ({
  id: card.code, 
  image: card.image 
}));

function PlayingCardList() {
  const [cards, addCard, clearCards] = useAxios(
    "https://deckofcardsapi.com/api/deck/new/draw/",
    formatPlayingCardData
  );

  return (
    <div className="PlayingCardList">
      <button onClick={() => addCard()}>Add a playing card!</button>
      <button onClick={clearCards}>Clear cards</button>
      <div className="PlayingCardList-card-area">
        {cards.map(card => (
          <PlayingCard key={card.id} front={card.image} />
        ))}
      </div>
    </div>
  );
}

export default PlayingCardList;
