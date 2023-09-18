import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

const ProductDetails = () => {
  const abi_url = "https://fakestoreapi.com/products";
  const params = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`${abi_url}/${params.productId}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch(Error("404} Not Found"));
  }, []);
  return (
    <>
      <Product
        image={data.image}
        title={data.title}
        description={data.description}
        showButton={false}
        price={data.price}
        id={data.id}
      />
    </>
  );
};

export default ProductDetails;
