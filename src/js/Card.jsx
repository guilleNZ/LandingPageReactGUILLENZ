
import React from "react";

const Card = ({ image, title, description }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text flex-grow-1">{description}</p>
          <a href="#" className="btn btn-primary mt-auto">
            Comprar
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
