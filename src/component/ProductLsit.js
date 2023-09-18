import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./productlist.css";

const ProductLsit = () => {
  const abiUrl = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const getData = () => {
    fetch(abiUrl)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  const getCategories = () => {
    fetch(`${abiUrl}/categories`)
      .then((res) => res.json())
      .then((category) => setCategories(category));
  };
  useEffect(() => {
    getData();
    getCategories();
  }, []);
  const getProductsIncategory = (catName) => {
    fetch(`${abiUrl}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  return (
    <>
      <h2 className="text-center p-3">Our Product</h2>
      <div className="container">
        <div className="btn-holder">
          <button
            className="btn btn-info"
            onClick={() => {
              getData();
            }}
          >
            All
          </button>
          {categories.map((category) => {
            return (
              <button
                key={category}
                className="btn btn-info"
                onClick={() => getProductsIncategory(category)}
              >
                {category}
              </button>
            );
          })}
        </div>
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-lg-3 col-md-6 col-sm-12" key={product.id}>
                <Product
                  image={product.image}
                  title={product.title}
                  description={product.description}
                  showButton={true}
                  price={product.price}
                  id={product.id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductLsit;
