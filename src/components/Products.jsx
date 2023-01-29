import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, } from "react-bootstrap";
import "./Products.css";
const Products = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
    <h1 className="text-muted text-center my-4">Primeshop Products</h1>
      <div className="products-container">
        {loading && (
          <div>
            {" "}
            <h1>Loading...</h1>
          </div>
        )}

        {data.map((product ) => (
          <div key={product.id} className="product-container m-auto p-4">
            <Card style={{width:"300px",height:"auto"}} className="shadow border border-secondary " >
            <img src={product.image} alt="product-images" className="m-auto"
            style={{width:"200px" ,height:"200px"}} 
            />
            <h3 className="text-muted ">{`Price:$ ${product.price}`}</h3>
            <p className="text-muted">Ratings:⭐⭐⭐⭐</p>
      <button className="m-auto btn btn-dark my-3">Add to Cart</button>
      <p className="border text-uppercase "> {product.category}</p>

            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
