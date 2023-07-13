import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Product = ({product}) => {
  return (
    <Card className='my-3 p-2 rounded card'>
        <Link to={`/products/${product._id}`} className='img' >
            <Card.Img className='img' src={product.image} variant='top'></Card.Img>
        </Link>
        <Card.Body className='cardBody'>
            <Link to={`/products/${product._id}`}>
                <Card.Title as="div" className='product-title'>
                    <strong>{product.name}</strong>
                </Card.Title>
                <Card.Text as="h3" className='price'>
                    ${product.price}
                </Card.Text>
            </Link>
        </Card.Body>

    </Card>
  )
}

export default Product