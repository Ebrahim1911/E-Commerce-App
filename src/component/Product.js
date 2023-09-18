import React from "react";
import { Link } from "react-router-dom";
import "./product.css";
const Product = (props) => {
  return (
    <>
      <div className="card">
        <div className="img">
          <img src={props.image} className="card-img-top" alt={props.title} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <p>Price:{props.price}$</p>
          {props.showButton && (
            <Link className="btn btn-primary" to={`/product/${props.id}`}>
              Details
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
