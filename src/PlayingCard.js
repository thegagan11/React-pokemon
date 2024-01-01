import React from "react";
import useFlip from "./hooks/useFlip"; // Import the useFlip hook
import backOfCard from "./back.png";
import "./PlayingCard.css"

function PlayingCard({ front, back = backOfCard }) {
  const [isFacingUp, flipCard] = useFlip(true); // Use the useFlip hook

  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={flipCard}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
