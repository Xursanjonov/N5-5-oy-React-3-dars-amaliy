import React from 'react'
import { productsData } from '../../static/productsData'
import './hero.scss'
import ProductsCard from '../cards/ProductsCard';

const Hero = () => {
    console.log(productsData);

    const productMap = productsData?.map((product)=> (<ProductsCard key={product.id} product={product} />))

    return (
        <section className="products container">
            <h1 className="products__title">Products</h1>
            <div className="products-box"> {productMap} </div>
        </section>
    )
}

export default Hero