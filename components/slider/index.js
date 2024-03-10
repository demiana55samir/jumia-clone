import React, { useState, useEffect } from "react";
import RecomHeader from "../recommended/header";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import db from "../../firebase";
import Link from "next/link";

export default function SliderMainPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const firestore = getFirestore(db);
        const productsCollection = collection(firestore, "products");
        const snapshot = await getDocs(productsCollection);
        const productsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData.slice(0, 12));
        console.log(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="container mt-5 items-center justify-center">
      <RecomHeader title="Recommended Products" color="bg-lime-300" />
      <div className="container mt-3 flex flex-wrap justify-around m-3">
  {products.map((product) => (
    <div key={product.id} className="mb-4 mx-1 flex items-center justify-center">
      <div className="bg-white p-6 shadow-md rounded-md"
       style={{ width: "300px", height: "400px", alignItems: "center" }}>
        <img
          src={product.imageURL}
          alt={product.name}
          className="w-2/3 h-3/4 object-cover mx-auto mb-4"
        />
        <div className="text-center">
        <h3 className="text-lg font-semibold mb-2 overflow-hidden line-clamp-1">{product.name}</h3>
          <Link href={`/products/${product.id}`} className="btn btn-primary m-2">
            Details
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("/products");
  const data = await res.json();
  return {
    props: { products: data },
    //Incremintal Static Regneration (ISR) time interval
    // revalidate:10
  };
}
