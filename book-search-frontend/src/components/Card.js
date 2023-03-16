import React from "react";
import "./card.css";

const Card = ({ book }) => {
  const { title, author, publish_year, cover } = book;
  const imageSrc = cover;

  return (
    <div className="book">
      <img src={imageSrc} alt={title} />
      <h2> {title}</h2>
      <p>{author}</p>
      <p>{publish_year}</p>
    </div>
  );
};

export default Card;
