import React from 'react'
import './productsCard.scss'

const ProductsCard = ({ product }) => {
    const { img, name, price } = product;

    return (
        <div className='product-card'>
            <img className='product-card__url' src={img} alt="" />
            <div className="product-card__title">
                <h3>{name}</h3>
                <p>Price: {price}</p>
                <div className="card-btn">
                    <button className='product-card__btn'>Add</button>
                    <a href='#' className='product-card__btn2'>Learn more</a>
                </div>
            </div>
        </div>
    )
}

export default ProductsCard