import React from "react";
import NewsLetter from "./components/NewsLetter";
import Items from "./components/products";
import Item from "./components/Item";
import Card from "./components/card";
import categories from "./categories";
import Products from './components/products';
const Home = () => { 
  return (
    <>
      <NewsLetter />
      <Products/>
      <Items />
    </>
  );
};

export default Home;
