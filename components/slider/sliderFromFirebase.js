import React, { useState, useEffect } from 'react';
import RecomHeader from '../recommended/header';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import db from "../../firebase";

const SliderApiPage = () => {
    
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const firestore = getFirestore(db); 
        const productsCollection = collection(firestore, 'products');
        const snapshot = await getDocs(productsCollection);
        const productsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="mt-5">
      <RecomHeader title="Official Store" color="bg-lime-300" />
      <div className="carousel w-full">
        {products.map((product) => (
          <div key={product.id} className="carousel-item w-full">
            <img src={product.imageURL} className="w-full h-80" alt={`Product ${product.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderApiPage;
