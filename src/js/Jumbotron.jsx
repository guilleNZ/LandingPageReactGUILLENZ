
import React from "react";

const Jumbotron = () => {
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Nueva colección hombre</h1>
        <p className="col-md-8 fs-4">
          Encuentra lo mejor en moda masculina: polos, pantalones, zapatos y accesorios.
        </p>
        <button className="btn btn-primary btn-lg" type="button">
          Ver productos
        </button>
      </div>
    </div>
  );
};

export default Jumbotron;
