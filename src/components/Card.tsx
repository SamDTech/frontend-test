import React from "react";

const Card: React.FC<{ image: string }> = ({ image }) => {
  return (
    <div className="card">
      <img src={image} alt="card image" />
      <div className="text">
        <h3>Quality Rain Forest</h3>
        <p>Making sure wide life lives on </p>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default Card;
