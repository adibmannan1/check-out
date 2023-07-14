import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = ({product}) => {
  return (
    <Card className='my-3 p-2 rounded card'>
        <Link to={`/product/${product._id}`} className='img-container' >
            <Card.Img className='img' src={product.image} variant='top'></Card.Img>
        </Link>
        <Card.Body className='cardBody'>
            <Link to={`/product/${product._id}`}>
                <Card.Title as="div" className='product-title'>
                    <strong>{product.name}</strong>
                </Card.Title>
            </Link>
            <Card.Text as='div'>
                <Rating value={product.rating} text={`(${product.numReviews})`}/>
            </Card.Text>
            <Card.Text as="h3" className='price'>
                ${product.price}
            </Card.Text>
        </Card.Body>

    </Card>
  )
}

export default Product