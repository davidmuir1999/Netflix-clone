import db from "../firebase";
import React, { useEffect, useState } from "react";
import "./PlansScreen.css";
import { collection, getDocs } from "firebase/firestore";

function PlansScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const colRef = collection(db, "products");
    getDocs(colRef).then((snapshot) => {
      let products = [];
      snapshot.docs.forEach((price) => {
        products.push({ priceData: price.data(), priceId: price.id });
      });
      setProducts(products);
    });
  }, []);
  console.log(products)
  return <div className="plansScreen"></div>;
}

export default PlansScreen;
