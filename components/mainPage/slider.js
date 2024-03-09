import React, { useState, useEffect } from 'react';
import RecomHeader from '../recommended/header';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import db from "../../firebase";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function SliderMainPage() {
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
        setProducts(productsData.slice(0, 12));
        console.log(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="container mt-5">
      <RecomHeader title="Recommended Products" color="bg-lime-300" />
      <div className="container mt-3 flex flex-wrap justify-content-around">
        {products.map((product) => (
          <div key={product.id} className="mb-4">
            <Card style={{ width: '400px', height: '500px', alignItems: "center" }}>
              <Card.Img variant="top" src={product.imageURL} style={{ width: '200px', height: '300px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <button className="btn btn-primary" onClick={() => navigate(`/details/${product.id}`)}>
                  Details
                </button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {/* <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs bg-slate-900 text-white">
          1
        </a>
        <a href="#item2" className="btn btn-xs bg-slate-900 text-white">
          2
        </a>
        <a href="#item3" className="btn btn-xs bg-slate-900 text-white">
          3
        </a>
        <a href="#item4" className="btn btn-xs bg-slate-900 text-white">
          4
        </a>
      </div> */}

    </div>
  );
}
