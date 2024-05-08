import React from 'react'
import Button from '../Buttun';
import './productsCard.scss'
import { productsData } from '../../static/productsData';

const ProductsCard = ({ product, setAddCard }) => {
    const addCards = () => {
        const filterCard = productsData?.find((e) => e.id === product.id)

        if (filterCard) {
            setAddCard(item => (
                [...item, { ...product }]
            ));
        } else {
            setAddCard(item => ([...item, { ...product }]));
        }
    }

    return (
        <div className='product-card'>
            <img className='product-card__url' src={product.img} alt="" />
            <div className="product-card__title">
                <h3>{product.name}</h3>
                <p>Price: {product.price}</p>
                <h5>Count: {product.count}</h5>
                <div className="card-btn">
                    <Button onClick={addCards} className='product-card__btn'>Add</Button>
                    <a href='#' className='product-card__btn2'>Learn more</a>
                </div>
            </div>
        </div>
    )
}

export default ProductsCard