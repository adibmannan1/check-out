import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../products'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import Rating from '../components/Rating'

const ProductScreen = () => {
    const {id: productId} = useParams()
    const product = products.find((p)=>p._id === productId)

    return (
        <div className='product-screen-container'>
            <Link className='btn btn-light my-3' id='product-screen-back' to='/'>Go Back</Link>
            <div className='product-screen-container2'>
                <div>
                    <img src={product.image} alt={product.name} fluid className='product-screen-img'/>
                </div>
                <div className="product-screen-text">
                    <div>
                        <h3 className='product-screen-title num'>{product.name}</h3>
                    </div>
                    <div>
                        <h3 className='product-screen-subtitle'>{product.subtitle}</h3>
                    </div>
                    <div>
                        <Rating value={product.rating} text={`(${product.numReviews})`}/>
                    </div>
                    <div>
                        <span className='num'>${product.price}</span>
                    </div>
                    <div>
                        {product.description}
                    </div>
                    <div>
                        <strong>
                            {product.countInStock > 0? 'In Stock':'Out of Stock'}
                        </strong>
                    </div>
                    <Button className='btn-block' type='button' disabled={product.countInStock===0}>
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen