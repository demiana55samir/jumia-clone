import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import db from "../../firebase";
import RecomHeader from './header';

export default function Electronics() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const firestore = getFirestore(db);
        const productsCollection = collection(firestore, 'products');
        const q = query(productsCollection, where('category', '==', 'electronics'));
        const snapshot = await getDocs(q);
        const productsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData.slice(0, 10)); 
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="pt-5">
    <RecomHeader title="Recommended Electronics" color="bg-lime-300" />
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
