import React from 'react'
import { Card } from 'react-bootstrap'

const Product = ({product}) => {
  return (
    <Card className='my-3 p-3 rounded'>
        <a href={`/products/${product._id}`}>
            <Card.Img src={product.image} variant='top'></Card.Img>
        </a>
        <Card.Body>
            <a href={`/products/${product._id}`}>
                <Card.Title as="div">
                    <strong>{product.name}</strong>
                </Card.Title>
                <Card.Text as="h3">
                    ${product.price}
                </Card.Text>
            </a>
        </Card.Body>

    </Card>
  )
}

export default Product