import React from 'react';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button, ListGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import Rating from '../components/Rating';
import { useGetProductDetailsQuery } from '../slices/productSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';
import {addToCart} from '../slices/cartSlice'


const ProductScreen = () => {
    const {id: productId} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [qty, setQty] = useState(1);
    
    // fetching data 
    const {data: product, isLoading, error} = useGetProductDetailsQuery(productId);

    const addToCartHandler = () => {
        dispatch(addToCart({...product, qty}));
        // navigate('/cart');
    };
    
    return (
        <>
        {   isLoading? (<Loader/>) : 
            error? (<Message varitant='danger'>{error?.data?.message || error?.error}</Message>) : 
            (<div className='product-screen-container'>
            <Link className='btn btn-light my-3' id='product-screen-back' to='/'>Go Back</Link>
            <div className='product-screen-container2'>
                <div className='product-screen-img-container'>
                    <img src={product.image} alt={product.name} fluid className='product-screen-img'/>
                    <Rating className="product-screen-rating" value={product.rating} 
                    text={`(${product.numReviews})`}/>
                </div>
                <div className="product-screen-text">
                    <div className="product-screen-text-upper">
                        <div>
                            <h3 className='product-screen-title num'>{product.name}</h3>
                        </div>
                        <div>
                            <h3 className='product-screen-subtitle'>{product.subtitle}</h3>
                        </div>
                        <div className={product.countInStock > 0? `product-screen-status-green`:
                        `product-screen-status-red`}>
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
                        <span className='num'><span className='num' 
                        style={{ color: '#082750', marginRight: '5px'}}>$</span>{product.price}</span>
                        </div>

            
                        
                        <div className='flex-box-div'>
                            <Button className='btn-block product-screen-button'
                            type='button' disabled={product.countInStock===0} onClick={addToCartHandler}>
                                Add to Cart
                            </Button>
                            {product.countInStock>0 && (
                            <div className='product-quantity'>
                                    <h5>Quantity</h5>
                                    <div>
                                        <Form.Control
                                        className='qty'
                                        as='select'
                                        value={qty}
                                        onChange={(e) => setQty(Number(e.target.value))}>
                                            {[...Array(product.countInStock).keys()].map(
                                            (x) => (
                                                <option key={x+1} value={x+1}>{x+1}</option>
                                            ))}
                                        </Form.Control>
                                    </div>
                            </div>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )}
    </>

    )
}

export default ProductScreen;