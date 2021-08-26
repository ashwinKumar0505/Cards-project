import React from "react";

const Card = ({ title, body }) => {
  return (
    <div className="card">
      <h4 className="card-title">{title}</h4>
      <p className="card-body">{body}</p>
    </div>
  );
};

export default Card;
