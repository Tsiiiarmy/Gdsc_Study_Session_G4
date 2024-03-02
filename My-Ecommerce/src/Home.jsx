import React from "react";
import ProductList from "./ProductList";

const Home = ({ products }) => {
  return (
    <div>
      <h1>Welcome to My E-commerce Store!</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
