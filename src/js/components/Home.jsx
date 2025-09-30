
import React from "react";
import Navbar from "../Navbar";
import Jumbotron from "../Jumbotron";
import Card from "../Card";

const Home = ({ visible, onDesmontar, cards }) => {
  return (
    <>
      <Navbar />

      <div className="container my-5">
        
        <button className="btn btn-primary mb-3" onClick={onDesmontar}>
          Desmontar Jumbotron
        </button>

        
        {visible && <Jumbotron />}

        <div className="row row-cols-1 row-cols-md-4 g-4 mt-4">
          
          {cards.map((c, i) => (
            <Card key={i} image={c.image} title={c.title} description={c.description} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
