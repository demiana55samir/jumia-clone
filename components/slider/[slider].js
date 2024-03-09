import { useRouter } from 'next/router';
import React from 'react';

const ProductId = ({product}) => {
    const router=useRouter();
    return (
        <div className="container border-1 border-black mt-5 ">
            <div>Hellooo</div>
        </div>
    );
}

export default ProductId ;
export async function getStaticProps(context){
    const {productId}= context.params
    const res= await fetch (`products/${productId}`)
    const data= await res.json();
    return {props:{product:data}}
}

export  async function getStaticPaths(){
 return {
    paths:[
        {params:{productId:'1'}},
        {params:{productId:'2'}},
        {params:{productId:'3'}}
    ],
    fallback:"blocking"
 }   
}