import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import db from "../../firebase";

export default function Recommendedforu() {
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
        setProducts(productsData.slice(0, 10)); // Display the first 10 products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="pt-5">
      <div className="carousel carousel-center w-full bg-white shadow-lg rounded-lg">
        {products.map((product) => (
          <div key={product.id} className="carousel-item flex flex-col w-[150px] md:w-[200px]">
            <img
              src={product.imageURL}
              className="rounded-box w-full h-40 md:h-48 p-10"
              alt={`Product ${product.id}`}
            />
            <span className="justify-center text-center">{product.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
