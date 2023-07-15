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
                <div className='product-screen-img-container'>
                    <img src={product.image} alt={product.name} fluid className='product-screen-img'/>
                    <Rating className="product-screen-rating" value={product.rating} text={`(${product.numReviews})`}/>
                </div>
                <div className="product-screen-text">
                    <div className="product-screen-text-upper">
                        <div>
                            <h3 className='product-screen-title num'>{product.name}</h3>
                        </div>
                        <div>
                            <h3 className='product-screen-subtitle'>{product.subtitle}</h3>
                        </div>
                        <div className={product.countInStock > 0? `product-screen-status-green`:`product-screen-status-red`}>
                            <strong>
                                {product.countInStock > 0? 'In Stock':'Out of Stock'}
                            </strong>
                        </div>
                        <div className='product-screen-description'>
                            {product.description}
                        </div>
                    </div>
                    <div className="product-screen-lower">
                        <div className='product-screen-price'>
                        <span className='num'><span className='num' style={{ color: '#082750', marginRight: '5px'}}>$</span>{product.price}</span>
                        </div>
                        <Button className='btn-block product-screen-button' type='button' disabled={product.countInStock===0}>
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen