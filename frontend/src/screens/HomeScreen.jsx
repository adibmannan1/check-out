import React from 'react'
import { useEffect, useState } from 'react'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  // fetching data
  useEffect(()=>{
    const fetchProducts = async () => {
      const {data} = await axios.get('/api/products');
      setProducts(data);
    };
    fetchProducts();
  }, [])

  return (
    <>
      <h1 className='home-screen-heading'>Newest Products</h1>
      <Row>
        {products.map((product)=>(
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product}/>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen