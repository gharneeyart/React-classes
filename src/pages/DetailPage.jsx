import React from 'react'
import ProductCard from '../components/ProductCard'
import DetailCard from '../components/DetailCard'
import { useParams } from 'react-router-dom'
import { data } from '../db/productDB'


const DetailPage = () => {
    // Any name used when linking in app.jsx is what useparams is listening to.
    const { productId } = useParams()
    // console.log(`Product ${id} clicked`);
    // console.log(data);

    // Go into the database and get the product with the id === productId
    const productG = data.find((p) => p.id === parseInt(productId));
    // console.log(productG);
  return (
    <div>
        <h1>Details Page</h1>
        <div>
        <h3>Product { productId } clicked</h3>
        <DetailCard product={productG}/>
        </div>
    </div>
    
  )
}

export default DetailPage