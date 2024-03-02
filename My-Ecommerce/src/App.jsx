import React, { useState } from "react";
import { BrowserRouter as Router, Routes , Route, Switch } from "react-router-dom";
import Home from "./Home";
import ShoppingCart from "./ShoppingCart";
import Navbar from "./Navbar";
import ProductDetail from "./ProductDetail";

const App = () => {
  const [products, setProducts] = useState(/* Your product data here */);
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home products={products} />
        </Route>
        <Route path="/cart">
          <ShoppingCart cart={cart} />
        </Route>
        <Route path="/product/:id">
          <ProductDetail products={products} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
